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
        owner
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
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
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
        owner
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
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
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
        owner
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
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
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
        owner
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
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
    $owner: String
  ) {
    onCreateCommentLike(filter: $filter, owner: $owner) {
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
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
    $owner: String
  ) {
    onUpdateCommentLike(filter: $filter, owner: $owner) {
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
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike(
    $filter: ModelSubscriptionCommentLikeFilterInput
    $owner: String
  ) {
    onDeleteCommentLike(filter: $filter, owner: $owner) {
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
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
        owner
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
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
        owner
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
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
        owner
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
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
