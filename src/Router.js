import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './components/Home';
import Splash from './components/Splash';
import NotesIndex from './components/NotesIndex';
import UserShow from './components/UserShow';
import NoteShow from './components/NoteShow';

const RouterComponent = () => {
  return (
    <Router sceneStyle={ styles.bannerStyle }>
    <Scene key="auth">
      <Scene key='splash' component={Splash} />
      <Scene key="login" component={LoginForm} title="Log in"/>
      <Scene key="signup" component={SignupForm} title="Sign up"/>
    </Scene>
    <Scene key="main">
      <Scene
        key="record"
        component={Home}
        title="Record"
        onRight={() => Actions.notesIndex()}
        rightTitle="Notes"
        onLeft={() => Actions.userShow()}
        leftTitle="Settings"
         />
      <Scene key="notesIndex" component={NotesIndex} title="Notes" />
      <Scene key="userShow" component={UserShow} title="Settings" />
      <Scene key="noteShow" component={NoteShow} title="Note" />
    </Scene>

    </Router>
  );
};

const styles = {
  bannerStyle: {
    paddingTop: 65
  }
}

export default RouterComponent;
