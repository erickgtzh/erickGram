import {Alert, StyleSheet, Text} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors} from '../../theme/colors';
import {useMutation} from '@apollo/client';
import {DeletePostMutation, DeletePostMutationVariables, Post} from '../../API';
import {deletePost} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Storage} from 'aws-amplify';

interface IPostMenu {
  post: Post;
}

const PostMenu = ({post}: IPostMenu) => {
  const {userId} = useAuthContext();
  const isMyPost = post?.userID === userId;
  const [doDeletePost] = useMutation<
    DeletePostMutation,
    DeletePostMutationVariables
  >(deletePost, {variables: {input: {id: post.id, _version: post._version}}});

  const navigation = useNavigation<FeedNavigationProp>();

  const insets = useSafeAreaInsets();

  const onDeleteOptionPressed = () => {
    Alert.alert('Are you sure?', 'Deleting a post is permantent', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Delete post', style: 'destructive', onPress: startDeletingPost},
    ]);
  };

  const onEditOptionPressed = () => {
    navigation.navigate('UpdatePost', {postId: post.id});
  };

  const startDeletingPost = async () => {
    if (post.image) {
      await Storage.remove(post.image);
    }
    if (post.video) {
      await Storage.remove(post.video);
    }
    if (post.images) {
      await Promise.all(post.images.map(image => Storage.remove(image)));
    }

    try {
      await doDeletePost();
    } catch (error) {
      Alert.alert('Failed to delete post', (error as Error).message);
    }
  };

  return (
    <Menu renderer={renderers.SlideInMenu} style={styles.threeDots}>
      <MenuTrigger
        customStyles={{
          triggerTouchable: {
            hitSlop: 15,
          },
        }}>
        <Entypo name="dots-three-horizontal" size={16} color={colors.black} />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            paddingBottom: insets.bottom,
          },
        }}>
        <MenuOption onSelect={() => Alert.alert('Reporting...')}>
          <Text style={styles.optionText}>Report</Text>
        </MenuOption>
        {isMyPost && (
          <>
            <MenuOption onSelect={onDeleteOptionPressed}>
              <Text style={[styles.optionText, {color: colors.error}]}>
                Delete
              </Text>
            </MenuOption>
            <MenuOption onSelect={onEditOptionPressed}>
              <Text style={styles.optionText}>Edit</Text>
            </MenuOption>
          </>
        )}
      </MenuOptions>
    </Menu>
  );
};

const styles = StyleSheet.create({
  optionText: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.black,
    padding: 10,
  },
  threeDots: {
    marginLeft: 'auto',
  },
});

export default PostMenu;
