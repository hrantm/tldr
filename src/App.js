import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Router from './Router';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Root from './components/Root';

class App extends React.Component {

  constructor () {
    super();
  }

  componentWillMount () {
    var config = {
      apiKey: "AIzaSyDrICZ66cgV_L99qKWyxGaEpYnEaEPBAFY",
      authDomain: "scriblr-2c1c5.firebaseapp.com",
      databaseURL: "https://scriblr-2c1c5.firebaseio.com",
      projectId: "scriblr-2c1c5",
      storageBucket: "scriblr-2c1c5.appspot.com",
      messagingSenderId: "697939716110"
    };
    firebase.initializeApp(config);
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Router />
          <Root store={store}/>
        </View>
      </Provider>
    );
  }
}

export default App;
