/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createLike = /* GraphQL */ `mutation CreateLike(
  $input: CreateLikeInput!
  $condition: ModelLikeConditionInput
) {
  createLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateLikeMutationVariables,
  APITypes.CreateLikeMutation
>;
export const updateLike = /* GraphQL */ `mutation UpdateLike(
  $input: UpdateLikeInput!
  $condition: ModelLikeConditionInput
) {
  updateLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateLikeMutationVariables,
  APITypes.UpdateLikeMutation
>;
export const deleteLike = /* GraphQL */ `mutation DeleteLike(
  $input: DeleteLikeInput!
  $condition: ModelLikeConditionInput
) {
  deleteLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteLikeMutationVariables,
  APITypes.DeleteLikeMutation
>;
export const createCommentLike = /* GraphQL */ `mutation CreateCommentLike(
  $input: CreateCommentLikeInput!
  $condition: ModelCommentLikeConditionInput
) {
  createCommentLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentLikeMutationVariables,
  APITypes.CreateCommentLikeMutation
>;
export const updateCommentLike = /* GraphQL */ `mutation UpdateCommentLike(
  $input: UpdateCommentLikeInput!
  $condition: ModelCommentLikeConditionInput
) {
  updateCommentLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentLikeMutationVariables,
  APITypes.UpdateCommentLikeMutation
>;
export const deleteCommentLike = /* GraphQL */ `mutation DeleteCommentLike(
  $input: DeleteCommentLikeInput!
  $condition: ModelCommentLikeConditionInput
) {
  deleteCommentLike(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentLikeMutationVariables,
  APITypes.DeleteCommentLikeMutation
>;
export const createComment = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCommentMutationVariables,
  APITypes.CreateCommentMutation
>;
export const updateComment = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCommentMutationVariables,
  APITypes.UpdateCommentMutation
>;
export const deleteComment = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCommentMutationVariables,
  APITypes.DeleteCommentMutation
>;
export const createPost = /* GraphQL */ `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePostMutationVariables,
  APITypes.CreatePostMutation
>;
export const updatePost = /* GraphQL */ `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePostMutationVariables,
  APITypes.UpdatePostMutation
>;
export const deletePost = /* GraphQL */ `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePostMutationVariables,
  APITypes.DeletePostMutation
>;
export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
