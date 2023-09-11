import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Comment as CommentType} from '../../API';
import {DEFAULT_USER_IMAGE} from '../../config';
import useCommentLikeService from '../../services/LikeCommentService';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import UserImage from '../UserImage/UserImage';
dayjs.extend(relativeTime);

interface ICommentProps {
  comment: CommentType;
  includeDetails?: boolean;
  isNewComment?: boolean;
}

const Comment = ({
  comment,
  includeDetails = false,
  isNewComment,
}: ICommentProps) => {
  const {toggleIsLiked, isLiked} = useCommentLikeService(comment);

  return (
    <View style={styles.comment}>
      {includeDetails && (
        <UserImage
          imageKey={comment.User?.image || undefined}
          style={styles.avatar}
        />
      )}
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.bold}>{comment.User?.username} </Text>
          {comment.comment}
        </Text>
        {includeDetails && (
          <View style={styles.footer}>
            {isNewComment && <Text style={styles.new}>new</Text>}
            <Text style={styles.footerText}>
              {dayjs(comment?.createdAt).fromNow()}
            </Text>
            <Text style={styles.footerText}>2x</Text>
            <Text style={styles.footerText}>Reply</Text>
          </View>
        )}
      </View>
      <Pressable onPress={toggleIsLiked} hitSlop={10}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  bold: {color: colors.black, fontWeight: fonts.weight.bold},
  icon: {marginHorizontal: 5},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {color: colors.black},
  avatar: {width: 40, aspectRatio: 1, borderRadius: 25, marginRight: 5},
  footer: {flexDirection: 'row', marginBottom: 10},
  footerText: {marginRight: 10, color: colors.grey},
  middleColumn: {flex: 1},
  new: {
    backgroundColor: colors.primary,
    color: colors.white,
    paddingHorizontal: 5,
    marginRight: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default Comment;
