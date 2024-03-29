import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  post: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 2.5,
    marginHorizontal: 2.5,
    marginBottom: 4,
  },
  image: {width: '100%', aspectRatio: 1},
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  userAvatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  userName: {fontWeight: fonts.weight.bold, color: colors.black},
  threeDots: {marginLeft: 'auto'},
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  text: {color: colors.black},
  bold: {color: colors.black, fontWeight: fonts.weight.bold},
  icon: {marginHorizontal: 5},
  footer: {padding: 10},
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {color: colors.grey, fontSize: fonts.size.default},
  locationText: {color: colors.grey, fontSize: fonts.size.default},
});
