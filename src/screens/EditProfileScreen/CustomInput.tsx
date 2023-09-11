import React from 'react';
import {Control, Controller} from 'react-hook-form';
import {User} from '../../API';
import styles from './styles';
import {colors} from '../../theme/colors';
import {Text, TextInput, View} from 'react-native';

type IEditableUserField = 'name' | 'username' | 'website' | 'bio' | 'image';
export type IEditableUser = Pick<User, IEditableUserField>;

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
              value={value || ''}
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

export default CustomInput;
