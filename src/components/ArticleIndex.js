import React from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';
import { fetchArticles, fetchExcludes } from '../actions';

import { Footer } from './common';


class ArticleIndex extends React.Component {

  componentWillMount () {
    this.props.fetchArticles();
    this.props.fetchExcludes();
    sorted = this.sortedArticles(this.props);
    this.createDataSource(sorted);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    sorted = this.sortedArticles(nextProps)
    this.createDataSource(sorted);
  }

  sortedArticles ({articles}) {
    return (articles.sort((a, b) => {
      return a.age - b.age
    }))
  }

  createDataSource (articles) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(articles);
  }

  renderRow (article) {
    return <ListItem article={article} articles={this.props.articles} />;
  }

  render () {
    return (
      <View>
        <ListView
          style={{marginBottom: 48}}
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const allArticles = _.values(state.articles.data)
  const filteredArticles = []

  allArticles.forEach( article => {
    if(state.excludes[article.category.toLowerCase()]) {
      filteredArticles.push(article)
    }
  })
  return {
    articles: filteredArticles
  };
};

export default connect(mapStateToProps, { fetchArticles, fetchExcludes } )(ArticleIndex);
