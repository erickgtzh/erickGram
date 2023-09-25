import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import {ProfileStackNavigatorParamList} from '../types/navigation';
import UserFollowTabNavigator from './UserFollowTabNavigator';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator<ProfileStackNavigatorParamList>();

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Edit Profile" component={EditProfileScreen} />
      <Stack.Screen name="UserFollow" component={UserFollowTabNavigator} />
    </Stack.Navigator>
  );
};

export default ProfileStackNavigator;
