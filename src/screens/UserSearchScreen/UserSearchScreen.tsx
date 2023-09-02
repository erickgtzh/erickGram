import {ActivityIndicator, FlatList, View} from 'react-native';
import React from 'react';
import UserListItem from '../../components/UserListItem/UserListItem';
import {listUsers} from './queries';
import {useQuery} from '@apollo/client';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import {ListUsersQuery, ListUsersQueryVariables} from '../../API';

const UserSearchScreen = () => {
  const {data, error, loading, refetch} = useQuery<
    ListUsersQuery,
    ListUsersQueryVariables
  >(listUsers);

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching users" message={error.message} />
    );
  }

  const users = (data?.listUsers?.items || []).filter(
    user => user && !user._deleted,
  );

  return (
    <FlatList
      data={users}
      renderItem={({item}) => item && <UserListItem user={item} />}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default UserSearchScreen;
