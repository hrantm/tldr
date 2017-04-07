import React from 'react';
import { Text,
         ScrollView,
         Image,
         TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/FontAwesome';

class ArticleShow extends React.Component {

  constructor () {
    super();
    this.state = {speaking: false};
  }

  playArticle () {
    if (this.state.speaking) {
      this.stopArticle();
    } else {
      Tts.speak(this.props.article.smmry);
    }
    this.setState({speaking: !this.state.speaking});
  }

  stopArticle() {
    Tts.stop();
  }

  renderIcon () {
    if (this.state.speaking) {
      return <Icon name="pause" size={15} />;
    } else {
      return <Icon name="play" size={15} />;
    }
  }

  componentWillUnmount() {
    this.stopArticle();
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

        <TouchableWithoutFeedback onPress={this.playArticle.bind(this)}>
          {this.renderIcon()}
        </TouchableWithoutFeedback>

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
