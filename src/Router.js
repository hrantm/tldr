import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Splash from './components/Splash';
import ArticleIndex from './components/ArticleIndex';
import UserShow from './components/UserShow';
import ArticleShow from './components/ArticleShow';

const RouterComponent = () => {
  return (
    <Router hideNavBar={true}>
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
        sceneStyle={ styles.bannerStyle }
        hideNavBar={false}
        key="articleFeed"
        component={ArticleIndex}
        title="Feed"
        leftTitle="Settings"
        onLeft={() => Actions.userShow()}
        />
      <Scene
        sceneStyle={ styles.bannerStyle }
        hideNavBar={false}
        key="userShow"
        component={UserShow}
        direction='leftToRight'
        title="Settings"
        rightTitle="Record"
        onRight={() => Actions.articleFeed()}
        />
      <Scene
        sceneStyle={ styles.bannerStyle }
        hideNavBar={false}
        key="articleShow"
        component={ArticleShow}
        title="Note"
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
  }
}

export default RouterComponent;
