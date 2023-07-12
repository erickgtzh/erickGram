import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';
import {colors} from '../../theme/colors';

export default StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  avatar: {width: 100, aspectRatio: 1, borderRadius: 50},
  numberContainer: {alignItems: 'center'},
  numberText: {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.full,
    color: colors.black,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  textDetail: {
    color: colors.grey,
  },
  name: {
    fontSize: fonts.size.md,
    color: colors.black,
    fontWeight: fonts.weight.semi,
  },
  bio: {
    fontSize: fonts.size.md,
    color: colors.black,
  },
  buttons: {
    flexDirection: 'row',
  },
});
