import {gql} from '@apollo/client';

export const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
        username
        image
      }
    }
  }
`;
