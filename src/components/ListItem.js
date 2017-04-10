import React from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setCurrentArticle } from '../actions';

class ListItem extends React.Component {

  onPress () {
    Actions.articleShow({article: this.props.article});
    this.props.setCurrentArticle({currentArticle: this.props.article});
  }

  render () {
    const { article } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <CardSection style={styles.listStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{uri: article.img_url}} />
          <View style={styles.listDetailStyle}>
            <Text style={styles.titleStyle}>
              {article.title}
            </Text>
            <Text style={styles.bodyStyle}>
              {article.smmry.slice(0,75)}...
            </Text>
            <Text style={styles.detailStyle}>
              {article.category}
            </Text>
          </View>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 100,
    fontWeight: '900',
    color: '#555459'
  },
  listStyle: {
    flexDirection: 'row'
  },
  detailStyle: {
    fontSize: 12,
    paddingLeft: 15,
    fontWeight: '600',
    color: '#555459'
  },
  bodyStyle: {
    fontSize: 12,
    paddingLeft: 15,
    paddingRight: 100,
    color: 'rgba(0,0, 0,0.5)'
  },
  thumbnailStyle: {
    height: 100,
    width: 100,
    borderRadius: 3
  },
  listDetailStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
};

const mapDispatchToProps = dispatch => ({
  setCurrentArticle: (article) => dispatch(setCurrentArticle(article))
});

export default connect(null, mapDispatchToProps)(ListItem);
