import {View, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {UserFollowersQuery, UserFollowersQueryVariables} from '../../API';
import {userFollowers} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import UserListItem from '../../components/UserListItem/UserListItem';

interface UserFollowersScreenProps {
  userId: string;
}

const UserFollowersScreen = ({userId}: UserFollowersScreenProps) => {
  const {data, loading, error, refetch} = useQuery<
    UserFollowersQuery,
    UserFollowersQueryVariables
  >(userFollowers, {variables: {followeeID: userId}});

  const users = data?.userFollowers?.items
    ?.filter(item => !item?._deleted)
    .map(item => item?.Follower);

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
        title="Error fetching followers"
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

export default UserFollowersScreen;
