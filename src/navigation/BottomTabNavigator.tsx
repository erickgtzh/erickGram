import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';
import {BottomTabNavigatorParamList} from '../types/navigation';
import SearchTabNavigator from './SearchTabNavigator';
import UploadStackNavigator from './UploadStackNavigator';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

type IconProps = {
  color: string;
  size: number;
};

const HomeIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialIcons name="home-filled" size={size} color={color} />
);
const SearchIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialIcons name="search" size={size} color={color} />
);
const UploadIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialCommunityIcons
    name="plus-circle-outline"
    size={size}
    color={color}
  />
);
const NotificationsIcon: React.FC<IconProps> = ({color, size}) => (
  <MaterialIcons name="notifications" size={size} color={color} />
);
const ProfileIcon: React.FC<IconProps> = ({color, size}) => (
  <FontAwesome name="user-circle-o" size={size} color={color} />
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
        tabBarInactiveTintColor: colors.lightgray,
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTabNavigator}
        options={{
          tabBarIcon: SearchIcon,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: UploadIcon,
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomeScreen}
        options={{
          tabBarIcon: NotificationsIcon,
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileStackNavigator}
        options={{
          tabBarIcon: ProfileIcon,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
