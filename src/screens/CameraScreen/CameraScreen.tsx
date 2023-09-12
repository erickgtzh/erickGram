import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Camera,
  CameraPictureOptions,
  CameraType,
  FlashMode,
  CameraRecordingOptions,
  VideoQuality,
} from 'expo-camera';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CreateNavigationProp} from '../../types/navigation';
import {launchImageLibrary} from 'react-native-image-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};

const CameraScreen = () => {
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [cameraType, setCameraType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const camera = useRef<Camera>(null);
  const [isRecording, setIsRecording] = useState(false);
  const navigation = useNavigation<CreateNavigationProp>();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();

      setHasPermissions(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  const onOpenImageGallery = () => {
    launchImageLibrary(
      {mediaType: 'mixed', selectionLimit: 3},
      ({didCancel, errorCode, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          const params: {image?: string; images?: string[]; video?: string} =
            {};
          if (assets.length === 1) {
            const field = assets[0].type?.startsWith('video')
              ? 'video'
              : 'image';
            params[field] = assets[0].uri;
            assets[0].uri;
          } else if (assets.length > 1) {
            params.images = assets.map(asset => asset.uri) as string[];
          }
          navigation.navigate('Create', params);
        }
      },
    );
  };

  if (hasPermissions === null) {
    return <Text>Loading...</Text>;
  }

  if (hasPermissions === false) {
    return <Text>No access to the camera</Text>;
  }

  const flipCamera = () => {
    setCameraType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const flipFlash = () => {
    const currentIndex = flashModes.indexOf(flash);
    const nextIndex =
      currentIndex !== flashModes?.length - 1
        ? flashModes[currentIndex + 1]
        : flashModes[0];
    setFlash(nextIndex);
  };

  const startRecording = async () => {
    if (!isCameraReady || !camera.current || isRecording) {
      return;
    }

    const options: CameraRecordingOptions = {
      quality: VideoQuality['4:3'],
      maxDuration: 60,
      maxFileSize: 10 * 1024 * 1024,
      mute: false,
    };
    setIsRecording(true);
    try {
      const result = await camera.current.recordAsync(options);
      navigation.navigate('Create', {video: result.uri});
    } catch (error) {
      console.warn(error);
    }
  };

  const stopRecording = () => {
    if (isRecording) {
      camera.current?.stopRecording();
      setIsRecording(false);
    }
  };

  const takePicture = async () => {
    if (!isCameraReady || !camera.current) {
      return;
    }

    const options: CameraPictureOptions = {
      quality: 0.5,
      base64: false,
      skipProcessing: true,
    };

    const result = await camera.current?.takePictureAsync(options);
    navigation.navigate('Create', {image: result.uri});
  };

  return (
    <View style={styles.page}>
      <Camera
        style={styles.camera}
        type={cameraType}
        ratio="4:3"
        onCameraReady={() => setIsCameraReady(true)}
        ref={camera}
      />
      <View style={[styles.buttonsContainer, {top: 10}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={flipFlash}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: insets.top + 25}]}>
        <MaterialIcons
          name="photo-library"
          size={30}
          color={colors.white}
          onPress={onOpenImageGallery}
        />
        {isCameraReady && (
          <Pressable
            onPress={takePicture}
            onLongPress={startRecording}
            onPressOut={stopRecording}>
            <View
              style={[
                styles.circle,
                {backgroundColor: isRecording ? colors.accent : colors.white},
              ]}
            />
          </Pressable>
        )}

        <Pressable onPress={flipCamera}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {width: '100%', aspectRatio: 3 / 4},
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
  },
});
