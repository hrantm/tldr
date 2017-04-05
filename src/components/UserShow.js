import React from 'react';
import { View, Text } from 'react-native';
import { Button, CardSection } from './common';
import firebase from 'firebase';

class UserShow extends React.Component {
  render () {
    return (
      <View>
        <Text>Email:</Text>
        <Text>{firebase.auth().currentUser.email}</Text>
        <Text>About:</Text>
        <Text>Scriblr is a mobile note taking application made with react-native in 1 week. </Text>
        <CardSection>
          <Button
            onPress={() => console.log("logout")}>
            Logout
          </Button>
        </CardSection>
      </View>
    );
  }
}

export default UserShow;
