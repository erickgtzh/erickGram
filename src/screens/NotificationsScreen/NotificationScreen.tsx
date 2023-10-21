import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  ModelSortDirection,
  UpdateNotificationMutation,
  UpdateNotificationMutationVariables,
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from '../../API';
import {updateNotification, userNotifications} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {colors} from '../../theme/colors';
import NotificationListItem from '../../components/NotificationListItem/NotificationListItem';

const NotificationScreen = () => {
  const {userId} = useAuthContext();

  const {data, loading, error, refetch} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {
    variables: {
      userId,
      sortDirection: ModelSortDirection.DESC,
    },
  });

  const notifications = (data?.userNotifications?.items || []).filter(
    item => !item?._deleted,
  );

  const [doUpdateNotification] = useMutation<
    UpdateNotificationMutation,
    UpdateNotificationMutationVariables
  >(updateNotification);

  console.log('data: ', data);

  useEffect(() => {
    const readNotifications = async () => {
      const unreadNotifications = notifications.filter(
        item => !item?.readAt && !item?._deleted,
      );

      await Promise.all(
        unreadNotifications.map(
          notification =>
            notification &&
            doUpdateNotification({
              variables: {
                input: {
                  id: notification.id,
                  _version: notification._version,
                  readAt: new Date().getTime(),
                },
              },
            }),
        ),
      );
    };

    readNotifications();
  }, [notifications]);

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching post"
        message={error?.message || 'Error'}
      />
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationListItem notification={item} />}
        onRefresh={refetch}
        refreshing={loading}
        ListEmptyComponent={
          <View>
            <Text style={{margin: 10, color: colors.black}}>
              No notifications
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default NotificationScreen;
