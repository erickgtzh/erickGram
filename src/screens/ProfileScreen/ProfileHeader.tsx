import {View, Text, Alert, Pressable} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './styles';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {
  CreateUserFollowMutation,
  CreateUserFollowMutationVariables,
  DeleteUserFollowMutation,
  DeleteUserFollowMutationVariables,
  User,
} from '../../API';
import {ProfileNavigationProp} from '../../types/navigation';
import {useAuthContext} from '../../contexts/AuthContext';
import UserImage from '../../components/UserImage/UserImage';
import {useMutation, useQuery} from '@apollo/client';
import {createUserFollow, deleteUserFollow, userFollowings} from './queries';
import {UserFollowingsQuery, UserFollowingsQueryVariables} from '../../API';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<ProfileNavigationProp>();

  const [doFollow, {loading: followingLoading}] = useMutation<
    CreateUserFollowMutation,
    CreateUserFollowMutationVariables
  >(createUserFollow, {
    variables: {
      input: {
        followeeID: user.id,
        followerID: userId,
      },
    },
    refetchQueries: ['UserFollowings'],
  });

  const [doUnfollow, {loading: unfollowingLoading}] = useMutation<
    DeleteUserFollowMutation,
    DeleteUserFollowMutationVariables
  >(deleteUserFollow);

  const {data: userFollowingsData, loading: userFollowingsLoading} = useQuery<
    UserFollowingsQuery,
    UserFollowingsQueryVariables
  >(userFollowings, {
    variables: {
      followerID: userId,
      followeeID: {eq: user.id},
    },
  });

  const userFollowObject = userFollowingsData?.userFollowings?.items?.filter(
    item => !item?._deleted,
  )?.[0];

  useEffect(() => {
    navigation.setOptions({
      title: user?.username || 'Profile',
    });
  }, [user?.username]);

  const onFollowPress = async () => {
    if (userFollowObject) {
      try {
        await doUnfollow({
          variables: {
            input: {
              id: userFollowObject.id,
              _version: userFollowObject._version,
            },
          },
          refetchQueries: ['UserFollowings'],
        });
      } catch (e) {
        Alert.alert('Failed to unfollow the user', (e as Error).message);
        console.log(e);
      }
      return;
    }
    try {
      await doFollow();
    } catch (e) {
      Alert.alert('Failed to follow the user', (e as Error).message);
      console.log(e);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <UserImage imageKey={user?.image || undefined} style={styles.avatar} />
        {/* Post */}
        <View style={styles.detailsContainer}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user?.nofPosts}</Text>
            <Text style={styles.textDetail}>Posts</Text>
          </View>
          <Pressable
            style={styles.numberContainer}
            onPress={() =>
              navigation.navigate('UserFollow', {
                screen: 'Followers',
                userId: user?.id,
              })
            }>
            <Text style={styles.numberText}>{user?.nofFollowers}</Text>
            <Text style={styles.textDetail}>Followers</Text>
          </Pressable>
          <Pressable
            style={styles.numberContainer}
            onPress={() =>
              navigation.navigate('UserFollow', {
                screen: 'Followings',
                userId: user?.id,
              })
            }>
            <Text style={styles.numberText}>{user?.nofFollowings}</Text>
            <Text style={styles.textDetail}>Following</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.bio}>{user?.bio}</Text>

      {userId === user?.id ? (
        <View style={styles.buttons}>
          <Button
            text="Edit Profile"
            onPress={() => navigation.navigate('Edit Profile')}
            inline
          />

          <Button
            text="Sign Out"
            onPress={() => {
              Auth.signOut();
            }}
            style={{marginLeft: 10}}
            inline
          />
        </View>
      ) : (
        <Button
          text={userFollowObject ? 'Unfollow' : 'Follow'}
          onPress={onFollowPress}
          inline
          disabled={
            userFollowingsLoading || followingLoading || unfollowingLoading
          }
        />
      )}
    </View>
  );
};

export default ProfileHeader;
