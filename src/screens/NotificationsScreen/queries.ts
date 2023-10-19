import {gql} from '@apollo/client';

export const userNotifications = gql`
  query UserNotifications(
    $userId: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userNotifications(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        readAt
        type
        userId
        actorId
        Actor {
          id
          name
          username
          image
        }
        Post {
          id
          image
          images
          video
        }
        notificationPostId
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
