import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import Splash from './components/Splash';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65  }}>
    <Scene key="auth">
      <Scene key='splash' component={Splash}>
        <Scene key="login" component={LoginForm} title="Please Login"/>
        <Scene key="signup" component={SignupForm} title="Please Signup"/>
      </Scene>
    </Scene>
    <Scene key="main">
      <Scene key="record" component={Home} title="Record" />
    </Scene>
    </Router>
  );
};

export default RouterComponent;
