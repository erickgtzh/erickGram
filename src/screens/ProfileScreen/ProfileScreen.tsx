import React from 'react';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import user from '../../assets/data/user.json';
import ProfileHeader from './ProfileHeader';

const ProfileScreen = () => {
  return <FeedGridView data={user.posts} LisHeaderComponent={ProfileHeader} />;
};

export default ProfileScreen;
