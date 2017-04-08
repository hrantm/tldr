import React from 'react';
import { View } from 'react-native';
import Router from '../Router';
import { Footer } from './common';
import _ from 'lodash';

import { connect } from 'react-redux';

class Root extends React.Component {

  renderFooter () {
    if (this.props.user) {
      return (<Footer articles={this.props.articles}/>);
    } else {
      return (<View></View>);
    }
  }

  render () {
    return (
      <View style={{flex: 1}}>
        <Router />
        {this.renderFooter()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  articles: _.values(state.articles.data)
});

export default connect(mapStateToProps, null)(Root);
