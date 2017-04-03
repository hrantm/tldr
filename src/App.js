import React from 'react';
import { Provider,  } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import Router from './Router';

class App extends React.Component {
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
        <Router />
      </Provider>
    );
  }
}

export default App;
