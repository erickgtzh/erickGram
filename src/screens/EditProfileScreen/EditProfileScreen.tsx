import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import user from '../../assets/data/user.json';
import React from 'react';
import {colors} from '../../theme/colors';
import fonts from '../../theme/fonts';
import {Control, Controller, useForm} from 'react-hook-form';
import {IUser} from '../../types/models';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';
type IEditableUser = Pick<IUser, IEditableUserField>;

interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  multiline?: boolean;
  name: IEditableUserField;
  rules?: object;
}

const CustomInput = ({
  control,
  label,
  multiline = false,
  name,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              value={value}
              style={[
                styles.input,
                {borderColor: error ? colors.error : colors.border},
              ]}
              placeholder={label}
              multiline={multiline}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholderTextColor={colors.grey}
            />
            {error && (
              <Text style={{color: colors.error}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);

const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = React.useState<Asset | null>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });

  const URL_REGEX =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

  const onSubmit = (data: IEditableUser) => {
    console.log('submit ', data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>
      <CustomInput
        name="name"
        label="Name"
        control={control}
        rules={{required: "Name can't be empty"}}
      />
      <CustomInput
        name="username"
        label="Username"
        control={control}
        rules={{
          required: "Username can't be empty",
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        }}
      />
      <CustomInput
        name="website"
        label="Website"
        control={control}
        rules={{
          required: "Website can't be empty",
          pattern: {value: URL_REGEX, message: 'Invalid URL'},
        }}
      />
      <CustomInput
        name="bio"
        label="Bio"
        multiline
        control={control}
        rules={{
          required: "Bio can't be empty",
          maxLength: {
            value: 200,
            message: 'Bio must be at most 200 characters',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  textInputContainer: {
    flex: 1,
  },
});

export default EditProfileScreen;
