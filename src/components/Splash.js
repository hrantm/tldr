import React from 'react';
import {Button, CardSection, Card} from './common';
import {Text, View, Image} from 'react-native';
import { Actions } from 'react-native-router-flux';
class Splash extends React.Component {

  render(){
    return(
      <View style={styles.pageViewStyle}>
        <Image
          source={require('../assets/newspaperSmaller.png')}
          style={styles.logoStyle}/>
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
      </View>
    );
  }

}

const styles = {
  pageViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87DBFD'
  },
  logoViewStyle: {
    width: 50,
    height: 50
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
