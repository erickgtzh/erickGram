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
import {
  Comment,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {deleteComment} from './queries';
import useCommentService from '../../services/CommentsService/CommentsService';

interface ICommentMenu {
  comment: Comment;
}

const CommentMenu = ({comment}: ICommentMenu) => {
  const {userId} = useAuthContext();
  const isMyComment = comment?.userID === userId;
  const [doDeleteComment] = useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(deleteComment, {
    variables: {input: {id: comment.id, _version: comment._version}},
  });
  const {incrementNofComments} = useCommentService(comment.postID);

  const onDeleteOptionPressed = () => {
    Alert.alert('Are you sure?', 'Deleting a comment is permantent', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'Delete comment',
        style: 'destructive',
        onPress: startDeletingComment,
      },
    ]);
  };

  const startDeletingComment = async () => {
    incrementNofComments(-1);
    await doDeleteComment();
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
      <MenuOptions>
        <MenuOption onSelect={() => Alert.alert('Reporting...')}>
          <Text style={styles.optionText}>Report</Text>
        </MenuOption>
        {isMyComment && (
          <>
            <MenuOption onSelect={onDeleteOptionPressed}>
              <Text style={[styles.optionText, {color: colors.error}]}>
                Delete
              </Text>
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

export default CommentMenu;
