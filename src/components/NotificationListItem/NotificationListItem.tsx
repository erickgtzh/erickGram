import {Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {S3Image} from 'aws-amplify-react-native';
import UserImage from '../UserImage/UserImage';
import {Notification} from '../../API';
import {UserProfileNavigationProp} from '../../types/navigation';
import fonts from '../../theme/fonts';
import {colors} from '../../theme/colors';

interface NotificationListItemProps {
  notification: Notification;
}

const NOTIFICATION_TEXT = {
  NEW_FOLLOWER: 'started following you.',
  NEW_LIKE: 'liked your post.',
  NEW_COMMENT: 'wrote a new comment.',
};

const NotificationListItem = ({notification}: NotificationListItemProps) => {
  const navigation = useNavigation<UserProfileNavigationProp>();

  const onPress = () => {
    if (notification.Actor?.id) {
      navigation.navigate('UserProfile', {
        screen: 'Profile',
        params: {userId: notification.Actor?.id},
      });
    }
  };

  const navigateToPost = () => {
    if (notification?.notificationPostId) {
      navigation.navigate('Post', {id: notification.notificationPostId});
    }
  };

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <UserImage imageKey={notification.Actor?.image} width={40} />
      <Text style={styles.notificationTxt}>
        <Text style={styles.username}>{notification.Actor?.username}</Text>{' '}
        {NOTIFICATION_TEXT[notification.type as keyof typeof NOTIFICATION_TEXT]}
      </Text>
      {notification.Post?.image && (
        <Pressable onPress={navigateToPost} style={styles.pressable}>
          <S3Image imgKey={notification.Post?.image} style={styles.image} />
        </Pressable>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    aspectRatio: 1,
  },
  username: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  notificationTxt: {
    color: colors.grey,
  },
  pressable: {
    marginLeft: 'auto',
  },
});

export default NotificationListItem;
