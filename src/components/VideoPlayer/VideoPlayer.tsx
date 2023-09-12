import React, {useState} from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../theme/colors';

interface IVideoPlayer {
  uri: string;
  paused?: boolean;
}

const VideoPlayer = ({uri, paused = true}: IVideoPlayer) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<Video>(null);

  return (
    <View>
      <Video
        ref={videoRef}
        source={{uri}}
        style={styles.video}
        resizeMode="cover"
        onEnd={() => {
          if (videoRef?.current) {
            videoRef.current.seek(0);
          }
        }}
        muted={isMuted}
        paused={paused}
      />
      <Pressable onPress={() => setIsMuted(v => !v)} style={styles.muteButton}>
        <Ionicons
          name={isMuted ? 'volume-mute' : 'volume-medium'}
          size={14}
          color={'white'}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 100,
  },
});

export default VideoPlayer;
