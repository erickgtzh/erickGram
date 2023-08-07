import React from 'react';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  MyProfileNavigationProp,
  MyProfileRouteProp,
  UserProfileNavigationProp,
  UserProfileRouteProp,
} from '../../navigation/types';

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  const userId = route.params?.userId;
  console.warn('id: ', userId);
  navigation.setOptions({title: user.username});

  return <FeedGridView data={user.posts} LisHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
