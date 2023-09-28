/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getLike = /* GraphQL */ `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    userID
    postID
    User {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    Post {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetLikeQueryVariables, APITypes.GetLikeQuery>;
export const listLikes = /* GraphQL */ `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListLikesQueryVariables, APITypes.ListLikesQuery>;
export const syncLikes = /* GraphQL */ `query SyncLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLikes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncLikesQueryVariables, APITypes.SyncLikesQuery>;
export const likesByUserID = /* GraphQL */ `query LikesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesByUserIDQueryVariables,
  APITypes.LikesByUserIDQuery
>;
export const likesForPostByUser = /* GraphQL */ `query LikesForPostByUser(
  $postID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesForPostByUser(
    postID: $postID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesForPostByUserQueryVariables,
  APITypes.LikesForPostByUserQuery
>;
export const getCommentLike = /* GraphQL */ `query GetCommentLike($id: ID!) {
  getCommentLike(id: $id) {
    id
    userID
    commentID
    User {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    Comment {
      id
      createdAt
      comment
      userID
      postID
      nofLikes
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentLikeQueryVariables,
  APITypes.GetCommentLikeQuery
>;
export const listCommentLikes = /* GraphQL */ `query ListCommentLikes(
  $filter: ModelCommentLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listCommentLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      commentID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        nofLikes
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentLikesQueryVariables,
  APITypes.ListCommentLikesQuery
>;
export const syncCommentLikes = /* GraphQL */ `query SyncCommentLikes(
  $filter: ModelCommentLikeFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCommentLikes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      commentID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        nofLikes
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCommentLikesQueryVariables,
  APITypes.SyncCommentLikesQuery
>;
export const commentLikesByUserID = /* GraphQL */ `query CommentLikesByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  commentLikesByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      commentID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        nofLikes
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentLikesByUserIDQueryVariables,
  APITypes.CommentLikesByUserIDQuery
>;
export const likesForCommentByUser = /* GraphQL */ `query LikesForCommentByUser(
  $commentID: ID!
  $userID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  likesForCommentByUser(
    commentID: $commentID
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      commentID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        nofLikes
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.LikesForCommentByUserQueryVariables,
  APITypes.LikesForCommentByUserQuery
>;
export const getComment = /* GraphQL */ `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    createdAt
    comment
    userID
    postID
    nofLikes
    User {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    Post {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    CommentLikes {
      items {
        id
        userID
        commentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCommentQueryVariables,
  APITypes.GetCommentQuery
>;
export const listComments = /* GraphQL */ `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      comment
      userID
      postID
      nofLikes
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCommentsQueryVariables,
  APITypes.ListCommentsQuery
>;
export const syncComments = /* GraphQL */ `query SyncComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncComments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      comment
      userID
      postID
      nofLikes
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCommentsQueryVariables,
  APITypes.SyncCommentsQuery
>;
export const commentsByUserID = /* GraphQL */ `query CommentsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      comment
      userID
      postID
      nofLikes
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByUserIDQueryVariables,
  APITypes.CommentsByUserIDQuery
>;
export const commentsByPost = /* GraphQL */ `query CommentsByPost(
  $postID: ID!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  commentsByPost(
    postID: $postID
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      comment
      userID
      postID
      nofLikes
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CommentsByPostQueryVariables,
  APITypes.CommentsByPostQuery
>;
export const getPost = /* GraphQL */ `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    createdAt
    type
    description
    location
    image
    images
    video
    nofComments
    nofLikes
    userID
    User {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    Likes {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Comments {
      items {
        id
        createdAt
        comment
        userID
        postID
        nofLikes
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetPostQueryVariables, APITypes.GetPostQuery>;
export const listPosts = /* GraphQL */ `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListPostsQueryVariables, APITypes.ListPostsQuery>;
export const syncPosts = /* GraphQL */ `query SyncPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncPostsQueryVariables, APITypes.SyncPostsQuery>;
export const postsByDate = /* GraphQL */ `query PostsByDate(
  $type: String!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByDate(
    type: $type
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByDateQueryVariables,
  APITypes.PostsByDateQuery
>;
export const postsByUserID = /* GraphQL */ `query PostsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  postsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PostsByUserIDQueryVariables,
  APITypes.PostsByUserIDQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    username
    bio
    website
    nofPosts
    nofFollowers
    nofFollowings
    image
    Comments {
      items {
        id
        createdAt
        comment
        userID
        postID
        nofLikes
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Posts {
      items {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Likes {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    CommentLikes {
      items {
        id
        userID
        commentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Followers {
      items {
        id
        followerID
        followeeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    Followings {
      items {
        id
        followerID
        followeeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const usersByUsername = /* GraphQL */ `query UsersByUsername(
  $username: String!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  usersByUsername(
    username: $username
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UsersByUsernameQueryVariables,
  APITypes.UsersByUsernameQuery
>;
export const getUserFollow = /* GraphQL */ `query GetUserFollow($id: ID!) {
  getUserFollow(id: $id) {
    id
    followerID
    followeeID
    Follower {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    Followee {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofFollowers
      nofFollowings
      image
      Comments {
        nextToken
        startedAt
        __typename
      }
      Posts {
        nextToken
        startedAt
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      CommentLikes {
        nextToken
        startedAt
        __typename
      }
      Followers {
        nextToken
        startedAt
        __typename
      }
      Followings {
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserFollowQueryVariables,
  APITypes.GetUserFollowQuery
>;
export const listUserFollows = /* GraphQL */ `query ListUserFollows(
  $filter: ModelUserFollowFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFollows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Followee {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFollowsQueryVariables,
  APITypes.ListUserFollowsQuery
>;
export const syncUserFollows = /* GraphQL */ `query SyncUserFollows(
  $filter: ModelUserFollowFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserFollows(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Followee {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserFollowsQueryVariables,
  APITypes.SyncUserFollowsQuery
>;
export const userFollowings = /* GraphQL */ `query UserFollowings(
  $followerID: ID!
  $followeeID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFollowFilterInput
  $limit: Int
  $nextToken: String
) {
  userFollowings(
    followerID: $followerID
    followeeID: $followeeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Followee {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFollowingsQueryVariables,
  APITypes.UserFollowingsQuery
>;
export const userFollowers = /* GraphQL */ `query UserFollowers(
  $followeeID: ID!
  $followerID: ModelIDKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFollowFilterInput
  $limit: Int
  $nextToken: String
) {
  userFollowers(
    followeeID: $followeeID
    followerID: $followerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      followerID
      followeeID
      Follower {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Followee {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFollowersQueryVariables,
  APITypes.UserFollowersQuery
>;
export const getUserFeedPost = /* GraphQL */ `query GetUserFeedPost($id: ID!) {
  getUserFeedPost(id: $id) {
    id
    userID
    postID
    postCreatedAt
    postOwnerID
    Post {
      id
      createdAt
      type
      description
      location
      image
      images
      video
      nofComments
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofFollowers
        nofFollowings
        image
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      Likes {
        nextToken
        startedAt
        __typename
      }
      Comments {
        nextToken
        startedAt
        __typename
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserFeedPostQueryVariables,
  APITypes.GetUserFeedPostQuery
>;
export const listUserFeedPosts = /* GraphQL */ `query ListUserFeedPosts(
  $filter: ModelUserFeedPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserFeedPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserFeedPostsQueryVariables,
  APITypes.ListUserFeedPostsQuery
>;
export const syncUserFeedPosts = /* GraphQL */ `query SyncUserFeedPosts(
  $filter: ModelUserFeedPostFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUserFeedPosts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncUserFeedPostsQueryVariables,
  APITypes.SyncUserFeedPostsQuery
>;
export const userFeed = /* GraphQL */ `query UserFeed(
  $userID: ID!
  $postCreatedAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelUserFeedPostFilterInput
  $limit: Int
  $nextToken: String
) {
  userFeed(
    userID: $userID
    postCreatedAt: $postCreatedAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.UserFeedQueryVariables, APITypes.UserFeedQuery>;
export const userFeedPostsByPostID = /* GraphQL */ `query UserFeedPostsByPostID(
  $postID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFeedPostFilterInput
  $limit: Int
  $nextToken: String
) {
  userFeedPostsByPostID(
    postID: $postID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFeedPostsByPostIDQueryVariables,
  APITypes.UserFeedPostsByPostIDQuery
>;
export const userFeedPostsByPostOwnerID = /* GraphQL */ `query UserFeedPostsByPostOwnerID(
  $postOwnerID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelUserFeedPostFilterInput
  $limit: Int
  $nextToken: String
) {
  userFeedPostsByPostOwnerID(
    postOwnerID: $postOwnerID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      userID
      postID
      postCreatedAt
      postOwnerID
      Post {
        id
        createdAt
        type
        description
        location
        image
        images
        video
        nofComments
        nofLikes
        userID
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.UserFeedPostsByPostOwnerIDQueryVariables,
  APITypes.UserFeedPostsByPostOwnerIDQuery
>;
