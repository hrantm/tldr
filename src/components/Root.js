import React from 'react';
import { View } from 'react-native';
import Router from '../Router';
import Footer from './Footer';
import _ from 'lodash';

import { connect } from 'react-redux';

class Root extends React.Component {

  renderFooter () {
    if (this.props.user) {
      return (
        <View style={{flex: 1}}>
          <Footer articles={this.props.articles}/>
        </View>
      );
    }
  }

  render () {
    return (
      <View>
        {this.renderFooter()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  articles: state.articles.data
});

export default connect(mapStateToProps, null)(Root);
