import {View, Image, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import Carousel from '../Carousel/Carousel';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import {Post} from '../../API';
import styles from './styles';
import {Storage} from 'aws-amplify';

interface IContent {
  post: Post;
  isVisible?: boolean;
}

const Content = ({post, isVisible}: IContent) => {
  const [imageUri, setImageUri] = React.useState<string | null>(null);
  const [imagesUri, setImagesUri] = React.useState<string[] | null>(null);
  const [videoUri, setVideoUri] = React.useState<string | null>(null);

  useEffect(() => {
    downloadMedia();
  }, []);

  const downloadMedia = async () => {
    if (post.image) {
      const uri = await Storage.get(post.image);
      setImageUri(uri);
    } else if (post.images) {
      const uris = await Promise.all(
        post.images.map(image => Storage.get(image)),
      );
      setImagesUri(uris);
    } else if (post.video) {
      const uri = await Storage.get(post.video);
      setVideoUri(uri);
    }
  };

  if (imageUri) {
    return (
      <Image
        source={{
          uri: imageUri,
        }}
        style={styles.image}
      />
    );
  } else if (imagesUri) {
    return <Carousel images={imagesUri} />;
  } else if (videoUri) {
    return <VideoPlayer uri={videoUri} paused={!isVisible} />;
  }

  return (
    <View style={{paddingTop: 20}}>
      <ActivityIndicator />
    </View>
  );
};

export default Content;
