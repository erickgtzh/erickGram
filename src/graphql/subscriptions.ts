/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCommentByPostId = /* GraphQL */ `
  subscription OnCreateCommentByPostId($postID: ID!) {
    onCreateCommentByPostId(postID: $postID) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
      __typename
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($filter: ModelSubscriptionLikeFilterInput) {
    onCreateLike(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($filter: ModelSubscriptionLikeFilterInput) {
    onUpdateLike(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($filter: ModelSubscriptionLikeFilterInput) {
    onDeleteLike(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
  ) {
    onCreateCommentLike(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          __typename
        }
        Post {
          id
          createdAt
          type
          description
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
  ) {
    onUpdateCommentLike(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          __typename
        }
        Post {
          id
          createdAt
          type
          description
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
  ) {
    onDeleteCommentLike(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
          __typename
        }
        Post {
          id
          createdAt
          type
          description
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
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      Post {
        id
        createdAt
        type
        description
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
      __typename
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      createdAt
      type
      description
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      __typename
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      createdAt
      type
      description
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      __typename
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      createdAt
      type
      description
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
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
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
      __typename
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
      __typename
    }
  }
`;
