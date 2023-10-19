import {View, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {UserFollowingsQuery, UserFollowingsQueryVariables} from '../../API';
import {userFollowings} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import UserListItem from '../../components/UserListItem/UserListItem';

interface UserFollowingsScreenProps {
  userId: string;
}

const UserFollowingsScreen = ({userId}: UserFollowingsScreenProps) => {
  const {data, loading, error, refetch} = useQuery<
    UserFollowingsQuery,
    UserFollowingsQueryVariables
  >(userFollowings, {variables: {followerID: userId}});

  const users = data?.userFollowings?.items
    ?.filter(item => !item?._deleted)
    .map(item => item?.Followee);

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
        title="Error fetching followings"
        message={error.message}
      />
    );
  }

  return (
    <FlatList
      data={users}
      renderItem={({item}) => item && <UserListItem user={item} />}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default UserFollowingsScreen;
