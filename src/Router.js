import React from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import Splash from './components/Splash';
import NotesIndex from './components/NotesIndex';
import UserShow from './components/UserShow';
import NoteShow from './components/NoteShow';

const RouterComponent = () => {
  return (
    <Router >
    <Scene
      key="auth">
      <Scene
        key='splash'
        component={Splash}
        hideNavBar={true}/>
      <Scene
        sceneStyle={ styles.bannerStyle }
        hideNavBar={false}
        navigationBarStyle={ styles.navBar }
        key="login"
        component={LoginForm}
        direction='vertical'
        title="Log in"/>
      <Scene
        hideNavBar={false}
        direction='vertical'
        key="signup"
        component={SignupForm}
        title="Sign up"/>
    </Scene>
    <Scene
      key="main"
      sceneStyle={ styles.loginHeaderStyle }>
      <Scene
        hideNavBar={false}
        key="record"
        component={Home}
        title="Record"
        onRight={() => Actions.notesIndex()}
        rightTitle="Notes"
        onLeft={() => Actions.userShow()}
        leftTitle="Settings"
         />
      <Scene
        hideNavBar={false}
        key="notesIndex"
        component={NotesIndex}
        title="Notes" />
      <Scene
        hideNavBar={false}
        key="userShow"
        component={UserShow}
        direction='leftToRight'
        title="Settings" />
      <Scene
        hideNavBar={false}
        key="noteShow"
        component={NoteShow}
        title="Note" />
    </Scene>

    </Router>
  );
};

const styles = {
  bannerStyle: {
    paddingTop: 65
  },
  loginHeaderStyle: {
    backgroundColor: 'black',
    justifyContent: 'flex-start'
  }
}

export default RouterComponent;
