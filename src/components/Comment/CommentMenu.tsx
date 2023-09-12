import {Alert, StyleSheet, Text} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
  renderers,
} from 'react-native-popup-menu';
import {colors} from '../../theme/colors';
import {useMutation} from '@apollo/client';
import {
  Comment as CommentType,
  DeleteCommentMutation,
  DeleteCommentMutationVariables,
} from '../../API';
import {deleteComment} from './queries';
import useCommentService from '../../services/CommentsService/CommentsService';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Comment from './Comment';
import {useAuthContext} from '../../contexts/AuthContext';

interface ICommentMenu {
  comment: CommentType;
  includeDetails?: boolean;
  isNewComment?: boolean;
}

const CommentMenu = ({comment, includeDetails, isNewComment}: ICommentMenu) => {
  const {userId} = useAuthContext();
  const isMyComment = comment.User?.id === userId;

  const [doDeleteComment] = useMutation<
    DeleteCommentMutation,
    DeleteCommentMutationVariables
  >(deleteComment, {
    variables: {input: {id: comment.id, _version: comment._version}},
  });
  const {incrementNofComments} = useCommentService(comment.postID);

  const insets = useSafeAreaInsets();

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
    <Menu renderer={renderers.SlideInMenu}>
      <MenuTrigger triggerOnLongPress={true}>
        <Comment
          comment={comment}
          includeDetails={includeDetails}
          isNewComment={isNewComment}
        />
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: {
            paddingBottom: insets.bottom,
          },
        }}>
        <>
          {isMyComment ? (
            <MenuOption onSelect={onDeleteOptionPressed}>
              <Text style={[styles.optionText, {color: colors.error}]}>
                Delete
              </Text>
            </MenuOption>
          ) : (
            <MenuOption onSelect={() => Alert.alert('Reporting...')}>
              <Text style={styles.optionText}>Report</Text>
            </MenuOption>
          )}
        </>
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
});

export default CommentMenu;
