import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';

export default StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
    flex: 1,
    backgroundColor: colors.white,
  },
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  textButtonDanger: {
    color: colors.error,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,
    margin: 10,
  },
  label: {
    color: colors.grey,
    width: 75,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  input: {
    borderBottomWidth: 1,
    color: colors.black,
    minHeight: 50,
  },
  textInputContainer: {
    flex: 1,
  },
});
