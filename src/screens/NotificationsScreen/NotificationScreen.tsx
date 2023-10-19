import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from '../../API';
import {userNotifications} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {colors} from '../../theme/colors';
import NotificationListItem from '../../components/NotificationListItem/NotificationListItem';

const NotificationScreen = () => {
  const {userId} = useAuthContext();

  console.log('UserID:', userId); // Debug line

  const {data, loading, error, refetch} = useQuery<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >(userNotifications, {
    variables: {
      userId,
    },
  });

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

  const notifications = (data?.userNotifications?.items || []).filter(
    item => !item?._deleted,
  );

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
