import {FlatList} from 'react-native';
import React from 'react';
import users from '../../assets/data/users';
import UserListItem from '../../components/UserListItem/UserListItem';

const UserSearchScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({item}) => <UserListItem user={item} />}
    />
  );
};

export default UserSearchScreen;
