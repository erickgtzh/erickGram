import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {colors} from '../../theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import Comment from '../Comment/Comment';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../../types/navigation';
import {Post} from '../../API';
import PostMenu from './PostMenu';
import useLikeService from '../../services/LikeService/LikeService';

import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import DoublePressable from '../DoublePressable';
import Content from './Content';
import UserImage from '../UserImage/UserImage';
dayjs.extend(relativeTime);

interface IFeedPost {
  post: Post;
  isVisible: boolean;
}

const FeedPost = ({post, isVisible}: IFeedPost) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const {toggleIsLiked, isLiked} = useLikeService(post);

  const postLikes = post.Likes?.items?.filter(like => !like?._deleted) || [];

  const postComments =
    post.Comments?.items?.filter(like => !like?._deleted) || [];

  const navigation = useNavigation<FeedNavigationProp>();

  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  const navigateToLikes = () => {
    navigation.navigate('PostLikes', {postId: post.id});
  };

  const navigateToUser = () => {
    if (post.User) {
      navigation.navigate('UserProfile', {userId: post.User?.id});
    }
  };

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <UserImage imageKey={post.User?.image || undefined} />
        <View>
          <Text style={styles.userName} onPress={navigateToUser}>
            {post.User?.username}
          </Text>
          {post.location && (
            <Text style={styles.locationText}>{post.location}</Text>
          )}
        </View>
        <PostMenu post={post} />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={toggleIsLiked}>
        <Content post={post} isVisible={isVisible} />
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleIsLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
            onPress={navigateToComments}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        {/* Likes */}
        {postLikes.length === 0 ? (
          <Text style={styles.text}>Be the first to like the post</Text>
        ) : (
          <Text style={styles.text} onPress={navigateToLikes}>
            Liked by{' '}
            <Text style={styles.bold}>{postLikes[0]?.User?.username}</Text>
            {postLikes.length > 1 && (
              <>
                {' '}
                and{' '}
                <Text style={styles.bold}>{postLikes.length - 1} others</Text>
              </>
            )}
          </Text>
        )}

        {/* Post Description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.User?.username} </Text>
          {post.description}
        </Text>

        <Text onPress={toggleDescriptionExpanded} style={styles.commentText}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Comments */}
        {postComments.length >= 2 && (
          <Text style={styles.commentText} onPress={navigateToComments}>
            View all {post.nofComments} comments
          </Text>
        )}

        {(post.Comments?.items || []).map(
          comment =>
            comment && (
              <Comment
                comment={comment}
                key={comment.id}
                includeDetails={false}
              />
            ),
        )}

        {/* Posted date */}
        <Text style={[styles.text, {color: colors.grey}]}>
          {dayjs(post.createdAt).fromNow()}
        </Text>
      </View>
    </View>
  );
};

export default FeedPost;
