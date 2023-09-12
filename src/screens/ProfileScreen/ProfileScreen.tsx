import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import ProfileHeader from './ProfileHeader';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from '../../types/navigation';
import {useQuery} from '@apollo/client';
import {getUser} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import {GetUserQuery, GetUserQueryVariables, User} from '../../API';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import {useAuthContext} from '../../contexts/AuthContext';

const ListHeaderComponent = ({user}: User) => <ProfileHeader user={user} />;

const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  const {userId: authUserId} = useAuthContext();

  const userId = route.params?.userId || authUserId;

  const {data, loading, error, refetch} = useQuery<
    GetUserQuery,
    GetUserQueryVariables
  >(getUser, {variables: {id: userId}});
  const user = data?.getUser;

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error || !user) {
    return (
      <ApiErrorMessage
        title="Error fetching the user"
        message={error?.message || 'User not found'}
        onRetry={() => refetch()}
      />
    );
  }
  return (
    <FeedGridView
      data={user.Posts?.items || []}
      ListHeaderComponent={<ListHeaderComponent user={user} />}
      refetch={refetch}
      loading={loading}
    />
  );
};

export default ProfileScreen;
