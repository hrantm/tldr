import React from 'react';
import { Text, View, TouchableWithoutFeedback  } from 'react-native';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';


class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      speaking: 'stopped',
      currentArticle: 1 };
    this.toggleArticle = this.toggleArticle.bind(this);
    this.nextArticle = this.nextArticle.bind(this);
    this.previousArticle = this.previousArticle.bind(this);
  }

  componentWillMount () {
    Tts.addEventListener('tts-finish', () => this.nextArticle());
  }

  nextArticle () {
    this.stopArticle();
    this.state.currentArticle = this.state.currentArticle + 1;
    this.toggleArticle();
  }

  previousArticle () {
    this.stopArticle();
    this.state.currentArticle = this.state.currentArticle - 1;
    this.toggleArticle();
  }

  componentWillUnmount () {
    this.stopArticle();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentArticle !== this.props.currentArticle) {
      this.state.currentArticle = nextProps.currentArticle.id;
      this.stopArticle();
      this.playArticle();
    }
  }

  toggleArticle () {
    console.log('playing:', this.state.speaking, this.state.currentArticle);
    if (this.state.speaking === 'stopped') {
      this.playArticle();
    } else if (this.state.speaking === 'playing') {
      this.pauseArticle();
    } else {
      this.resumeArticle();
    }
  }

  playArticle () {
    console.log('playArticle', this.props.articles, this.state.currentArticle);
    const article = this.props.articles[this.state.currentArticle];
    const speech = `Next article: ${article.title}. ${article.smmry}`;
    console.log('speaking about:', article);
    Tts.speak(speech);
    this.setState({speaking: 'playing'});
  }

  resumeArticle () {
    Tts.resume();
    this.setState({speaking: 'playing'});
  }

  pauseArticle() {
    Tts.pause();
    this.setState({speaking: 'paused'});
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
      <View>
        <View style={styles.viewStyle}>
          <TouchableWithoutFeedback onPress={this.previousArticle}>
            <Icon name="step-backward" style={styles.buttonStyle} size={15} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.toggleArticle}>
            {this.renderIcon()}
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback  onPress={this.nextArticle}>
            <Icon style={styles.buttonStyle} name="step-forward" size={15} />
          </TouchableWithoutFeedback>
        </View>
      </View>

    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#2ac8ff',
    justifyContent: 'center',
    marginBottom: 20,
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

const mapStateToProps = state => ({
  currentArticle: state.audio.currentArticle
});

export default connect(mapStateToProps, null)(Footer);
