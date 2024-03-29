import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  ViewToken,
} from 'react-native';
import FeedPost from '../../components/FeedPost/FeedPost';
import {useQuery} from '@apollo/client';
import {postsByDate} from './queries';
import {
  ModelSortDirection,
  PostsByDateQuery,
  PostsByDateQueryVariables,
} from '../../API';
import ApiErrorMessage from '../../components/ApiErrorMessage/ApiErrorMessage';
import {colors} from '../../theme/colors';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const {data, loading, error, refetch, fetchMore} = useQuery<
    PostsByDateQuery,
    PostsByDateQueryVariables
  >(postsByDate, {
    variables: {
      type: 'POST',
      sortDirection: ModelSortDirection.DESC,
      limit: 5,
    },
  });

  const nextToken = data?.postsByDate?.nextToken;

  const loadMore = async () => {
    if (!nextToken || isFetchingMore) {
      return;
    }

    setIsFetchingMore(true);
    await fetchMore({
      variables: {
        nextToken,
      },
    });
    setIsFetchingMore(false);
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems?.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );

  if (loading) {
    return (
      <View style={{paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  if (error) {
    return (
      <ApiErrorMessage title="Error fetching posts" message={error.message} />
    );
  }

  const posts = (data?.postsByDate?.items || []).filter(
    post => !post?._deleted,
  );

  return (
    <View style={styles.app}>
      <FlatList
        data={posts}
        renderItem={({item}) =>
          item && <FeedPost post={item} isVisible={item.id === activePostId} />
        }
        showsVerticalScrollIndicator={false}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged.current}
        onRefresh={refetch}
        refreshing={loading}
        onEndReached={loadMore}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1, backgroundColor: colors.lightgray},
});

export default HomeScreen;
