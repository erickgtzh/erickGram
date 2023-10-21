import React, {useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {createContext, useContext} from 'react';
import {
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from '../../API';
import {useAuthContext} from '../AuthContext';
import {onCreateNotification, userNotifications} from './queries';

const NotificationContext = createContext({newNotifications: 0});

const NotificationContextProvider = ({children}) => {
  const {userId} = useAuthContext();

  const {data, subscribeToMore} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {
    variables: {
      userId,
    },
  });

  useEffect(() => {
    if (!subscribeToMore || !userId) {
      return;
    }
    subscribeToMore({
      document: onCreateNotification,
      variables: {
        filter: {
          userId: {
            eq: userId,
          },
        },
      },
      updateQuery: (prev, next) => {
        return {
          ...prev,
          userNotifications: {
            ...prev?.userNotifications,
            items: [
              ...(prev?.userNotifications.items || []),
              next.subscriptionData.data.onCreateNotification,
            ],
          },
        };
      },
    });
  }, [subscribeToMore, userId]);

  const unreadNotifications = (data?.userNotifications?.items || []).filter(
    item => !item?.readAt && !item?._deleted,
  );

  return (
    <NotificationContext.Provider
      value={{newNotifications: unreadNotifications.length}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;

export const useNotificationContext = () => useContext(NotificationContext);
