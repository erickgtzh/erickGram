import {Image} from 'react-native';
import React from 'react';
import logo from '../assets/images/logo.png';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import {HomeStackNavigatorParamList} from '../types/navigation';
import UpdatePostScreen from '../screens/UpdatePostScreen/UpdatePostScreen';
import PostLikesScreen from '../screens/PostLikesScreen/PostLikesScreen';

const HomeStackNavigator = () => {
  const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={HomeScreen}
        options={{headerTitle: HeaderTitle, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="UserProfile"
        component={ProfileScreen}
        options={{title: 'Profile'}}
      />
      <Stack.Screen
        name="UpdatePost"
        component={UpdatePostScreen}
        options={{title: 'Update Post'}}
      />
      <Stack.Screen
        name="PostLikes"
        component={PostLikesScreen}
        options={{title: 'Post Likes'}}
      />
    </Stack.Navigator>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};

export default HomeStackNavigator;
