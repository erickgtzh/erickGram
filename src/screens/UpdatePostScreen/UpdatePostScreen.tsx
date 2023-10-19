import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  CreateNavigationProp,
  UpdatePostRouteProp,
} from '../../types/navigation';
import {colors} from '../../theme/colors';
import Button from '../../components/Button/Button';
import {useMutation, useQuery} from '@apollo/client';
import {
  GetPostQuery,
  GetPostQueryVariables,
  UpdatePostMutation,
  UpdatePostMutationVariables,
} from '../../API';
import {getPost, updatePost} from './queries';
import ApiErrorMessage from '../../components/ApiErrorMessage';

const UpdatePostScreen = () => {
  const [description, setDescription] = useState('');
  const navigation = useNavigation<CreateNavigationProp>();

  const route = useRoute<UpdatePostRouteProp>();
  const {postId} = route.params;

  const [doUpdatePost, {data: updateData, error: updateError}] = useMutation<
    UpdatePostMutation,
    UpdatePostMutationVariables
  >(updatePost);

  const {data, loading, error} = useQuery<GetPostQuery, GetPostQueryVariables>(
    getPost,
    {
      variables: {
        id: postId,
      },
    },
  );

  const post = data?.getPost;

  useEffect(() => {
    if (post) {
      setDescription(post?.description || '');
    }
  }, [post]);

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error || updateError) {
    return (
      <ApiErrorMessage
        title="Error fetching post"
        message={error?.message || updateError?.message || 'Error'}
      />
    );
  }

  const submit = async () => {
    try {
      if (!post) {
        return;
      }
      const response = await doUpdatePost({
        variables: {
          input: {
            id: post.id,
            description,
            _version: post._version || 1,
          },
        },
      });
      if (response.data?.updatePost) {
        navigation.goBack();
      }
    } catch (err) {
      Alert.alert('Error', (err as Error).message);
    }
  };

  return (
    <View style={styles.root}>
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Write a caption..."
        style={styles.input}
        multiline
        numberOfLines={5}
        placeholderTextColor={colors.lightgray}
      />

      <Button text="Post" onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  input: {
    marginVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: colors.black,
  },
  container: {width: '100%', aspectRatio: 1},
});

export default UpdatePostScreen;
