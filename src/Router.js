import React from 'react';
import { Navigator } from 'react-native';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Splash from './components/Splash';
import ArticleIndex from './components/ArticleIndex';
import UserShow from './components/UserShow';
import ArticleShow from './components/ArticleShow';

const RouterComponent = () => {
  return (
    <Router
      navigationBarStyle={styles.headerBackgroundStyle}
      titleStyle={styles.titleStyle}
      hideNavBar={true}>
    <Scene key="auth">
      <Scene
        key='splash'
        component={Splash}

        />
      <Scene
        hideNavBar={false}
        key="login"
        component={LoginForm}
        direction='vertical'
        title="Log in"
        />
      <Scene
        hideNavBar={false}
        direction='vertical'
        key="signup"
        component={SignupForm}
        title="Sign up"
        />
    </Scene>
    <Scene key="main">
      <Scene
        navigationBarStyle={styles.newHeaderStyle}
        titleStyle={styles.titleStyle}
        sceneStyle={ styles.bannerStyle }
        hideNavBar={false}
        key="articleFeed"
        renderBackButton={()=>null}
        component={ArticleIndex}
        title="Feed"
        rightTitle="Settings"
        onRight={() =>  Actions.userShow()}
        />
      <Scene
        navigationBarStyle={styles.newHeaderStyle}
        sceneStyle={ styles.bannerStyle }
        titleStyle={styles.titleStyle}
        hideNavBar={false}
        key="userShow"
        renderBackButton={()=>null}
        component={UserShow}
        title="Settings"
        rightTitle="Articles"
        onRight={() => Actions.articleFeed()}
        />
      <Scene
        navigationBarStyle={styles.newHeaderStyle}
        sceneStyle={ styles.bannerStyle }
        titleStyle={styles.titleStyle}
        hideNavBar={false}
        key="articleShow"
        component={ArticleShow}
        title="Article"
        />
    </Scene>

    </Router>
  );
};

const styles = {
  bannerStyle: {
    paddingTop: 65
  },
  loginHeaderStyle: {
    backgroundColor: 'rgba(203,79,131, 1)'
  },
  headerBackgroundStyle: {
    backgroundColor:'transparent',
    borderBottomWidth: 0,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomColor: 'transparent',
  },
  newHeaderStyle: {
    backgroundColor:'#2ac8ff',
    borderBottomWidth: 0,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomColor: 'transparent',
  },
  titleStyle: {
    color: '#fff'
  }

}

export default RouterComponent;
