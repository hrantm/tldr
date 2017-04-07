import React from 'react';
import {Button, CardSection, Card} from './common';
import {Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
class Splash extends React.Component {

  render(){
    return(
      <Image source={require('../assets/Colorful-Minimalistic-Background.jpg')} style={ styles.pageViewStyle}>

        <CardSection style={ styles.buttonViewStyle} >
            <Button
              styles={ styles.buttonStyle }
              onPress={Actions.login}>
              Login
            </Button>
            <Button
              styles={ styles.buttonStyle }
              onPress={Actions.signup}>
              Signup
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
    alignItems: 'center'
  },
  logoViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonViewStyle: {
    position: 'absolute',
    bottom:0,
    left:0,
    width: null,
    alignSelf: 'stretch',
    backgroundColor: 'transparent'
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    alignSelf: 'stretch'
  }
};

export default Splash;
