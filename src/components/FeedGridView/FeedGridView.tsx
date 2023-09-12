import {FlatList} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import FeedGridItem from './FeedGridItem';
import {Post} from '../../API';

interface IFeedGridView {
  data: (Post | null)[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
  refetch: () => void;
  loading: boolean;
}

const FeedGridView = ({
  data,
  ListHeaderComponent,
  refetch,
  loading,
}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => item && <FeedGridItem post={item} />}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ListHeaderComponent}
      style={{flex: 1, backgroundColor: colors.white, marginHorizontal: -1}}
      onRefresh={refetch}
      refreshing={loading}
    />
  );
};

export default FeedGridView;
