import React from 'react';
import { Text, ScrollView } from 'react-native';
import { CardSection } from './common';

class ArticleShow extends React.Component {

  render () {
    const { article } = this.props.article;
    return (
      <ScrollView>
        <Text style={styles.titleStyle}>
          {article.title}
        </Text>
        <Text style={styles.titleStyle}>
          {article.summary}
        </Text>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2a2a2a'
  }
};

export default ArticleShow;
