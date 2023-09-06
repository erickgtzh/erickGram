import {useMutation, useQuery} from '@apollo/client';
import {
  CreateCommentMutation,
  CreateCommentMutationVariables,
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';
import {createComment, getPost, updatePost} from './queries';
import {useAuthContext} from '../../contexts/AuthContext';
import {Alert} from 'react-native';

const useCommentService = (postId: string) => {
  const {userId} = useAuthContext();

  const [doUpdatePost] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const [doCreateComment] = useMutation<
    CreateCommentMutation,
    CreateCommentMutationVariables
  >(createComment, {refetchQueries: ['CommentsByPost']});

  const {data: postData} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {variables: {id: postId}},
  );

  const post = postData?.getPost;

  const incrementNofComments = (amount: 1 | -1) => {
    if (!post) {
      Alert.alert('Error updating post, please try again');
      return;
    }

    doUpdatePost({
      variables: {
        input: {
          id: postId,
          _version: post._version,
          nofComments: post.nofComments + amount,
        },
      },
    });
  };

  const onCreateComment = async (newComment: string) => {
    if (!post) {
      Alert.alert('Error updating post, please try again');
      return;
    }

    try {
      await doCreateComment({
        variables: {
          input: {
            comment: newComment,
            postID: post.id,
            userID: userId,
            nofLikes: 0,
          },
        },
      });
      incrementNofComments(1);
    } catch (error) {
      Alert.alert('Error creating comment', (error as Error).message);
      console.log('error: ', error);
    }
  };

  return {
    onCreateComment,
    incrementNofComments,
  };
};

export default useCommentService;
