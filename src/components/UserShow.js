import React from 'react';
import { Image, Text } from 'react-native';
import { Button, CardSection } from './common';
import firebase from 'firebase';

class UserShow extends React.Component {
  render () {
    return (
      <Image source={require('../assets/Colorful-Minimalistic-Background.jpg')} style={ styles.pageViewStyle}>
        <Text>Email:</Text>
        <Text>{firebase.auth().currentUser.email}</Text>
        <Text>About:</Text>
        <Text>TLDV (Too Long Didn't View) is a mobile news feed application made with react-native in 1 week. </Text>
        <CardSection>
          <Button
            onPress={() => console.log("logout")}>
            Logout
          </Button>
        </CardSection>
      </Image>
    );
  }
}

const styles = {
  pageViewStyle: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default UserShow;
