import {View, Text, Image} from 'react-native';
import Button from '../../components/Button/Button';
import styles from './styles';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {User} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';
import {ProfileNavigationProp} from '../../types/navigation';
import {useAuthContext} from '../../contexts/AuthContext';

interface IProfileHeader {
  user: User;
}

const ProfileHeader = ({user}: IProfileHeader) => {
  const {userId} = useAuthContext();
  const navigation = useNavigation<ProfileNavigationProp>();

  navigation.setOptions({
    title: user?.username || 'Profile',
  });

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image
          source={{uri: user?.image || DEFAULT_USER_IMAGE}}
          style={styles.avatar}
        />

        {/* Post */}
        <View style={styles.detailsContainer}>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user?.nofPosts}</Text>
            <Text style={styles.textDetail}>Posts</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user?.nofFollowers}</Text>
            <Text style={styles.textDetail}>Followers</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>{user?.nofFollowings}</Text>
            <Text style={styles.textDetail}>Following</Text>
          </View>
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
      ) : null}
    </View>
  );
};

export default ProfileHeader;
