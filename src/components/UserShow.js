import React from 'react';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'react-native-checkbox'
import { Button, CardSection } from './common';
import { logoutUser, fetchExcludes, updateExcludes } from '../actions';

class UserShow extends React.Component {

  componentWillMount () {
    Actions.userShow({type: 'reset'});
    this.props.fetchExcludes();
  };

  render () {
    console.log(this.props);
    return (
      <Image source={require('../assets/Colorful-Minimalistic-Background.jpg')} style={ styles.pageViewStyle}>

        <View style={styles.contentStyle}>
          <View >
            <Text
              style={styles.titleStyle}>
              Email:</Text>
            <Text
              style={styles.bodyStyle}>
              {firebase.auth().currentUser.email}</Text>
          </View>

          <View >
            <Text
              style={styles.titleStyle}
              >Categories:</Text>
            <View>
              <View>
                <CheckBox
                  underlayColor='transparent'
                  containerStyle={styles.checkContainerStyle}
                  labelBefore={true}
                  labelStyle={styles.bodyStyle}
                  label="Sports"
                  checked={true}
                  onChange={(checked)=> console.log("hi", checked)}/>
              </View>
              <View>
                <CheckBox
                  underlayColor='transparent'
                  containerStyle={styles.checkContainerStyle}
                  labelBefore={true}
                  labelStyle={styles.bodyStyle}
                  label="Politics"
                  checked={true}
                  onChange={(checked)=> console.log("hi", checked)}/>
              </View>
              <View>
                <CheckBox
                  underlayColor='transparent'
                  containerStyle={styles.checkContainerStyle}
                  labelBefore={true}
                  labelStyle={styles.bodyStyle}
                  label="Entertainment"
                  checked={true}
                  onChange={(checked)=> console.log("hi", checked)}/>
              </View>
              <View>
                <CheckBox
                  underlayColor='transparent'
                  containerStyle={styles.checkContainerStyle}
                  labelBefore={true}
                  labelStyle={styles.bodyStyle}
                  label="Tech"
                  checked={true}
                  onChange={(checked)=> console.log("hi", checked)}/>
              </View>
              <View>
                <CheckBox
                  underlayColor='transparent'
                  containerStyle={styles.checkContainerStyle}
                  labelBefore={true}
                  labelStyle={styles.bodyStyle}
                  label="Business"
                  checked={true}
                  onChange={(checked)=> console.log("hi", checked)}/>
              </View>
            </View>
          </View>

          <Text style={styles.titleStyle}>About:</Text>
          <Text style={styles.bodyStyle}>tldr (Too Long Didn't Read) is a mobile news aggregation application made with react-native in 1 week. Using SMMRY and News APIs, tldr produces a feed of summarized news articles. If even the summaries are too long, tldr uses Google Text-To-Speech to play summarized articles to users.</Text>
        </View>
        <CardSection
          style={styles.buttonStyle}>
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
    fetchExcludes: () => dispatch(fetchExcludes()),
    updateExcludes: () => dispatch(updateExcludes())
  }
}

const styles = {
  pageViewStyle: {
    flex: 1,
    width: null,
    height: null,
    paddingTop: 65,
    resizeMode: 'cover',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleStyle: {
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    color: '#fff',
    fontWeight: '600',
    fontSize: 16
    },
  contentStyle: {
    justifyContent: 'flex-start',
    height: 400,
    backgroundColor: 'transparent'
  },
  bodyStyle: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    color: '#fff'
  },
  buttonStyle: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0
  },
  checkContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20
  },
  checkStyle: {
    color: '#fff'
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
