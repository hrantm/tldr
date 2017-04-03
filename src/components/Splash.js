import React from 'react';
import {Button, CardSection, Card} from './common';
import {Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Splash extends React.Component {

  render(){
    return(
      <Card>

        <View >
          <CardSection>
            <Text>
              Logo
            </Text>
          </CardSection>
        </View>

        <View >
          <CardSection>
            <Button
              onPress={Actions.login}>
              Login
            </Button>
          </CardSection>
          <CardSection>
            <Button
            onPress={Actions.signup}>
              Signup
            </Button>
          </CardSection>
        </View>

      </Card>
    );
  }

}

const styles = {
  buttonViewStyle: {
    flexDirection: 'column',
    flex: 1
  },
  logoViewStyle: {
    flex: 6
  }
};

export default Splash;
