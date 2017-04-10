import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
  const { onPress, children } = props;
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: 'center',
    height: 40,
    width: 170,
    backgroundColor: '#FD715D',
    borderRadius: 20,
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
