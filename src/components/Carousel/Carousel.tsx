import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images?: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems?.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => {
          return (
            <DoublePressable onDoublePress={onDoublePress}>
              <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
            </DoublePressable>
          );
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
              borderRadius: 5,
              aspectRatio: 1,
              margin: 10,
              marginHorizontal: 5,
            }}
          />
        ))}

        {/* <View
          style={{
            width: 10,
            backgroundColor: 'red',
            borderRadius: 5,
            aspectRatio: 1,
            margin: 10,
            marginHorizontal: 5,
          }}
        /> */}
      </View>
    </View>
  );
};

export default Carousel;
