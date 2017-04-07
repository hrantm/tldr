import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#fff',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    width: 200,
    backgroundColor: 'transparent'
    },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: 'transparent'
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(209,103,119, 0.6)',
    backgroundColor: 'transparent'
  }
};

export { Input };
