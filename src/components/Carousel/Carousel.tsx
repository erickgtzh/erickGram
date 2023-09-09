import {
  View,
  FlatList,
  Image,
  useWindowDimensions,
  ViewToken,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../theme/colors';

interface ICarousel {
  images?: string[];
}

const Carousel = ({images}: ICarousel) => {
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
          return <Image source={{uri: item}} style={{width, aspectRatio: 1}} />;
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.container}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.image,
              {
                backgroundColor:
                  activeImageIndex === index ? colors.primary : colors.white,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 10,
    borderRadius: 5,
    aspectRatio: 1,
    margin: 10,
    marginHorizontal: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Carousel;
