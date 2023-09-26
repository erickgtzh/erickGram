import {StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Storage} from 'aws-amplify';
import {DEFAULT_USER_IMAGE} from '../../config';

const UserImage = ({imageKey, style}: {imageKey?: string; style?: {}}) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if (imageKey) {
      Storage.get(imageKey)
        .then(setImageUri)
        .catch(error => {
          console.error('Error getting the image: ', error);
          setHasError(true);
        });
    } else {
      setImageUri(DEFAULT_USER_IMAGE);
    }
  }, [imageKey]);

  return (
    <Image
      source={{
        uri: hasError ? DEFAULT_USER_IMAGE : imageUri || DEFAULT_USER_IMAGE,
      }}
      style={style ? style : styles.avatar}
      onError={() => setHasError(true)}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
});

export default UserImage;
