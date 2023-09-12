import {gql} from '@apollo/client';

export const createCommentLike = gql`
  mutation CreateCommentLike(
    $input: CreateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    createCommentLike(input: $input, condition: $condition) {
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
  }
`;

export const updateComment = gql`
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      numberOfLikes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;

export const likesForCommentByUser = gql`
  query LikesForCommentByUser(
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
          image
          username
        }
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
  }
`;

export const deleteCommentLike = gql`
  mutation DeleteCommentLike(
    $input: DeleteCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    deleteCommentLike(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
