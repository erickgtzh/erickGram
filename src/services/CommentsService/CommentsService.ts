import {useMutation, useQuery} from '@apollo/client';
import {Alert} from 'react-native';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  CreateNotificationMutation,
  CreateNotificationMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';
import {useAuthContext} from '../../contexts/AuthContext';
import {
  createComment,
  updatePost,
  getPost,
  createNotification,
} from './queries';
import {NotificationTypes} from '../../models';

const useCommentsService = (postId: string) => {
  const {userId} = useAuthContext();

  const {data: postData} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id: postId}},
  );
  const post = postData?.getPost;

  const [doUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const [doCreateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment);

  const [doCreateNotification] = useMutation<
    CreateNotificationMutation,
    CreateNotificationMutationVariables
  >(createNotification);

  const incrementNofComments = (amount: 1 | -1) => {
    if (!post) {
      Alert.alert('Failed to load post. Try again later');
      return;
    }
    doUpdatePost({
      variables: {
        input: {
          id: post.id,
          _version: post._version,
          nofComments: post.nofComments + amount,
        },
      },
    });
  };

  const onCreateComment = async (newComment: string) => {
    if (!post) {
      Alert.alert('Failed to load post. Try again later');
      return;
    }

    try {
      await doCreateComment({
        variables: {
          input: {
            postID: post.id,
            userID: userId,
            comment: newComment,
            nofLikes: 0,
          },
        },
      });

      await doCreateNotification({
        variables: {
          input: {
            type: NotificationTypes.NEW_COMMENT,
            userId: post.userID,
            actorId: userId,
            readAt: 0,
            notificationPostId: post.id,
          },
        },
      }).catch(error => {
        console.error('doCreateNotification Error:', error);
        throw error;
      });

      incrementNofComments(1);
    } catch (e) {
      console.error('Error in onCreateComment:', e); // Debug line
      Alert.alert('Error submitting the comment', (e as Error).message);
    }
  };

  return {
    onCreateComment,
    incrementNofComments,
  };
};

export default useCommentsService;
