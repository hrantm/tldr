 import React from 'react';
 import { Text, View, TouchableWithoutFeedback  } from 'react-native';
 import Tts from 'react-native-tts';
 import Icon from 'react-native-vector-icons/FontAwesome';


class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      speaking: 'stopped',
      currentArticle: 0 };
    Tts.addEventListener('tts-finish', () => this.nextArticle());
    this.playArticle = this.playArticle.bind(this);
    this.nextArticle = this.nextArticle.bind(this);
    this.lastArticle = this.lastArticle.bind(this);
  }

  nextArticle () {
    this.state.currentArticle = this.state.currentArticle + 1;
    this.stopArticle();
    this.playArticle();
  }

  lastArticle () {
    this.state.currentArticle = this.state.currentArticle - 1;
    this.stopArticle();
    this.playArticle();
  }

  componentWillUnmount () {
    this.stopArticle();
  }

  playArticle () {
    console.log('playing', this.state.speaking, this.state.currentArticle);
    if (this.state.speaking === 'stopped') {
      const article = this.props.articles[this.state.currentArticle];
      const speech = `Next article: ${article.title}. ${article.smmry}`;
      console.log('speaking about', article.title);
      Tts.speak(speech);
      this.setState({speaking: 'playing'});
    } else if (this.state.speaking === 'playing') {
      this.pauseArticle();
      this.setState({speaking: 'paused'});
    } else {
      Tts.resume();
      this.setState({speaking: 'playing'});
    }
  }

  pauseArticle() {
    Tts.pause();
  }

  stopArticle() {
    Tts.stop();
    this.state.speaking = 'stopped';
  }

  renderIcon () {
    const { speaking } = this.state;
    if (speaking === 'stopped' || speaking === 'paused') {
      return <Icon style={styles.buttonStyle} name="play" size={15} />;
    } else {
      return <Icon style={styles.buttonStyle} name="pause" size={15} />;
    }
  }

  render () {
    return (
      <View style={styles.viewStyle}>
        <TouchableWithoutFeedback onPress={this.lastArticle}>
          <Icon name="step-backward" style={styles.buttonStyle} size={15} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.playArticle}>
          {this.renderIcon()}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback  onPress={this.nextArticle}>
          <Icon style={styles.buttonStyle} name="step-forward" size={15} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#2ac8ff',
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row'
    },
  buttonStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fff'
  },
  textStyle: {
    fontSize: 20
  }
};

export { Footer };
