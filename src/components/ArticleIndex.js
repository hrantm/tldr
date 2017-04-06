import React from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import ListItem from './ListItem';
import { fetchArticles } from '../actions';


class ArticleIndex extends React.Component {

  componentWillMount () {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps (nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource ({ articles }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(articles);
  }

  renderRow (article) {
    return <ListItem article={article} />;
  }

  render () {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    articles: _.values(state.articles)
  }
};

export default connect(mapStateToProps, { fetchArticles } )(ArticleIndex);
