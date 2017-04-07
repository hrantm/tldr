import React from 'react';
import { Text, ScrollView, Image, TouchableHighlight } from 'react-native';
import { CardSection } from './common';
import Tts from 'react-native-tts';

class ArticleShow extends React.Component {

  playArticle () {
    Tts.speak(this.props.article.smmry);
  }

  render () {
    const { article } = this.props;
    return (
      <ScrollView>
        <CardSection>
          <Text style={styles.titleStyle}>
            {article.title}
          </Text>
        </CardSection>

        <TouchableHighlight onPress={this.playArticle.bind(this)}>
          <Text>play!</Text>
        </TouchableHighlight>

        <CardSection style={ styles.thumbnailContainerStyle}>
          <Image source={{uri: article.img_url}} style={styles.thumbnailStyle} />
        </CardSection>

        <CardSection>
          <Text style={styles.bodyStyle}>
            {article.smmry}
          </Text>
        </CardSection>
      </ScrollView>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 25,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2a2a2a',
    fontWeight: '900'
  },
  bodyStyle: {
    fontSize: 18,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#2a2a2a'
  },
  thumbnailStyle: {
    height: 200,
    flex: 1,
    width: null,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  }
};

export default ArticleShow;
