import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

class UserShow extends React.Component {
  render () {
    return (
      <View>
        <Text>{firebase.auth().currentUser.email}</Text>
      </View>
    );
  }
}

export default UserShow;
