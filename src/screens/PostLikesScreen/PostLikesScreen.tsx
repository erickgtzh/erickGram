import {View, ActivityIndicator, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from '@apollo/client';
import {likesForPostByUser} from './queries';
import {
  LikesForPostByUserQuery,
  LikesForPostByUserQueryVariables,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage';
import UserListItem from '../../components/UserListItem/UserListItem';
import {useRoute} from '@react-navigation/native';
import {PostLikestRouteProp} from '../../types/navigation';

const PostLikesScreen = () => {
  const route = useRoute<PostLikestRouteProp>();
  const {postId} = route.params;

  const {data, loading, error, refetch} = useQuery<
    LikesForPostByUserQuery,
    LikesForPostByUserQueryVariables
  >(likesForPostByUser, {variables: {postID: postId}});

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <ApiErrorMessage
        title="Error fetching likes"
        message={error.message || 'Error'}
      />
    );
  }

  const likes = data?.likesForPostByUser?.items.filter(like => !like?._deleted);

  return (
    <FlatList
      data={likes}
      renderItem={({item}) => <UserListItem user={item?.User} />}
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default PostLikesScreen;
