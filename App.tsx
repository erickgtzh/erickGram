import React from 'react';
import {Text, View} from 'react-native';
import {colors} from './src/theme/colors';
import fonts from './src/theme/fonts';

const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: fonts.size.xlg}}>
        Hello World!
      </Text>
    </View>
  );
};

export default App;
