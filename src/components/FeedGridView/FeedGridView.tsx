import {FlatList, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import ProfileHeader from '../../screens/ProfileScreen/ProfileHeader';
import {colors} from '../../theme/colors';
import FeedGridItem from './FeedGridItem';

interface IFeedGridView {
  data: IPost[];
  LisHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data}: IFeedGridView) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <FeedGridItem post={item} />}
      numColumns={3}
      keyExtractor={({id}) => id}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={ProfileHeader}
      style={{flex: 1, backgroundColor: colors.white, marginHorizontal: -1}}
    />
  );
};

export default FeedGridView;
