import {gql} from '@apollo/client';

export const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      fcmToken
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      fcmToken
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
