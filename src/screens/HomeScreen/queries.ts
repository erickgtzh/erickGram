import {gql} from '@apollo/client';

export const listPosts = gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        image
        images
        video
        nofComments
        nofLikes
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
        User {
          id
          name
          username
        }
        Comments(limit: 2) {
          items {
            id
            comment
            User {
              id
              name
              username
            }
          }
          nextToken
          startedAt
        }
        Likes {
          items {
            id
            _deleted
            User {
              id
              username
            }
          }
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
      __typename
    }
  }
`;