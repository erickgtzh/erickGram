import {View, Image, StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import {User} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';

interface IUserListItemProps {
  user: User;
}

const UserListItem = ({user}: IUserListItemProps) => {
  const navigation = useNavigation();

  const goToUserScreen = () => {
    navigation.navigate('UserProfile', {
      screen: 'Profile',
      params: {userId: user.id},
    });
  };

  return (
    <Pressable style={styles.container} onPress={goToUserScreen}>
      <Image
        source={{uri: user.image || DEFAULT_USER_IMAGE}}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>{user.username}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    color: colors.black,
    fontWeight: fonts.weight.bold,
    marginBottom: 5,
  },
  username: {
    color: colors.grey,
  },
});

export default UserListItem;
