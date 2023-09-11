import {StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Storage} from 'aws-amplify';
import {DEFAULT_USER_IMAGE} from '../../config';

const UserImage = ({imageKey, style}: {imageKey?: string; style?: {}}) => {
  const [imageUri, setImageUri] = React.useState<string | null>(null);

  useEffect(() => {
    if (imageKey) {
      Storage.get(imageKey).then(setImageUri);
    }
  }, [imageKey]);

  return (
    <Image
      source={{uri: imageUri || DEFAULT_USER_IMAGE}}
      style={style ? style : styles.avatar}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
});

export default UserImage;
