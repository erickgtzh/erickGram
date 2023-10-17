const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

const env = process.env.ENV;
const AppsyncID = process.env.API_INSTAGRAM_GRAPHQLAPIIDOUTPUT;
const PostTableName = `Post-${AppsyncID}-${env}`;
const UserFeedPostTableName = `UserFeedPost-${AppsyncID}-${env}`;

const BATCH_SIZE = 25;

const handle = async ({eventName, dynamodb}) => {
  const followeeID = dynamodb.NewImage.followeeID.S;
  const followerID = dynamodb.NewImage.followerID.S;

  if (eventName === 'INSERT') {
    await addFolloweesPostToUserFeed(followerID, followeeID);
  } else if (
    eventName === 'MODIFY' &&
    !dynamodb.OldImage._delete?.BOOL &&
    !!dynamodb.NewImage._deleted?.BOOL
  ) {
    await removeUserFeedPostsByFolloweeID(followerID, followeeID);
  }
};

const removeUserFeedPostsByFolloweeID = async (followerID, followeeID) => {
  const userFeedPosts = await getUserFeedPosts(followeeID);
  console.log(
    `Removing ${userFeedPosts.length} posts from User: ${followerID}'s feed`,
  );

  for (let i = 0; i < userFeedPosts.length; i += BATCH_SIZE) {
    const chunck = userFeedPosts.slice(i, i + BATCH_SIZE);
    await removeUserFeedPosts(chunck);
  }
};

const getUserFeedPosts = async (followerID, followeeID) => {
  const params = {
    TableName: UserFeedPostTableName,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression:
      'attribute_not_exists(#deleted) AND postOwnerID = :postOwnerID',
    ExpressionAttributeValues: {
      ':userID': followerID,
      ':postOwnerID': followeeID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const addFolloweesPostToUserFeed = async (followerID, followeeID) => {
  const posts = await getAllPostsByUserId(followeeID);
  console.log(`Adding ${posts.length} posts to User: ${followerID}'s feed`);

  for (let i = 0; i < posts.length; i += BATCH_SIZE) {
    const chunck = posts.slice(i, i + BATCH_SIZE);
    await addPostsToUserFeed(followerID, chunck);
  }
};

const addPostsToUserFeed = async (userID, posts) => {
  const params = {
    RequestItems: {
      [UserFeedPostTableName]: posts.map(post =>
        generatePutRequest(post, userID),
      ),
    },
  };

  try {
    await docClient.batchWrite(params).promise();
  } catch (e) {
    console.error(e);
  }
};

const removeUserFeedPosts = async items => {
  const params = {
    RequestItems: {
      [UserFeedPostTableName]: items.map(generateDeleteRequest),
    },
  };
  try {
    await docClient.batchWrite(params).promise();
  } catch (e) {
    console.log(e);
  }
};

const generatePutRequest = (post, userID) => {
  const date = new Date();
  const dateStr = date.toISOString();
  const timestamp = date.getTime();

  return {
    PutRequest: {
      Item: {
        id: `${userID}::${post.id}`,
        owner: `${userID}::${userID}`,

        postCreatedAt: post.createdAt,
        postID: post.id,
        postOwnerID: post.userID,

        userID: userID,

        _lastChangedAt: timestamp,
        createdAt: dateStr,
        updatedAt: dateStr,

        _version: 1,
        __typename: 'UserFeedPost',
      },
    },
  };
};

const generateDeleteRequest = userFeedPost => {
  return {
    DeleteRequest: {
      Key: {
        id: userFeedPost.id,
      },
    },
  };
};

const getAllPostsByUserId = async userID => {
  const params = {
    TableName: PostTableName,
    IndexName: 'byUser',
    KeyConditionExpression: 'userID = :userID',
    FilterExpression: 'attribute_not_exists(#deleted)',
    ExpressionAttributeValues: {
      ':userID': userID,
    },
    ExpressionAttributeNames: {
      '#deleted': '_deleted',
    },
  };

  try {
    const result = await docClient.query(params).promise();
    return result.Items;
  } catch (e) {
    console.log(e);
    return [];
  }
};

module.exports = handle;
