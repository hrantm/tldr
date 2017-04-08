import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, CardSection } from './common';
import { logoutUser, fetchExcludes } from '../actions';

class UserShow extends React.Component {

  componentWillMount () {
    Actions.userShow({type: 'reset'});
    this.props.fetchExcludes();
  };

  render () {
    console.log(this.props);
    return (
      <Image source={require('../assets/Colorful-Minimalistic-Background.jpg')} style={ styles.pageViewStyle}>
        <View>
          <Text>Email:</Text>
          <Text>{firebase.auth().currentUser.email}</Text>
        </View>
        <Text>About:</Text>
        <Text>TLDV (Too Long Didn't View) is a mobile news feed application made with react-native in 1 week. </Text>
        <CardSection>
          <Button
            onPress={() => this.props.logoutUser()}>
            Logout
          </Button>
        </CardSection>
      </Image>
    );
  }
}

const mapStateToProps = state => {
  return {
    excludes: state.excludes
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser()),
    fetchExcludes: () => dispatch(fetchExcludes())
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

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
