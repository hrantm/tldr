import React from 'react';
import { connect } from 'react-redux';
import { Text, Image, View } from 'react-native';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends React.Component {

  onEmailChange (text) {
    this.props.emailChanged(text);
  }

  onPasswordChange (text) {
    this.props.passwordChanged(text);
  }

  onButtonPress () {
    const { email, password } = this.props;

    this.props.loginUser(email, password);
  }

  renderButton () {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
          Login
        </Button>
      );
    }
  }

  render () {
    return (
      <Image source={require('../assets/Colorful-Minimalistic-Background.jpg')} style={ styles.pageViewStyle}>
        <View style={styles.contentStyle}>
          <Input
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />

          <Input
            secureTextEntry
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password} />

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

            {this.renderButton()}

        </View>
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
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    backgroundColor: 'transparent'
  },
  contentStyle: {
    width: 300,
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {email, password, error, loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser } )(LoginForm);
