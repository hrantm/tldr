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
      currentArticle: 1,
      currentArticleTitle:''};
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
    }
    if (nextProps.audio !== this.props.audio) {
      this.stopArticle();
      this.playArticle();
    }
  }

  toggleArticle () {
    if (this.state.speaking === 'stopped') {
      this.playArticle();
    } else if (this.state.speaking === 'playing') {
      this.pauseArticle();
    } else {
      this.resumeArticle();
    }
  }

  playArticle () {
    const article = this.props.articles[this.state.currentArticle];
    const speech = `Next article: ${article.title}. ${article.smmry}`;
    Tts.speak(speech);
    this.setState({speaking: 'playing'});
    this.setState({currentArticleTitle: article.title});
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
      <View style={styles.viewStyle}>
          <View style={styles.footerStyle}>
            <View style={styles.playerStyle}>

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

          <View>
            <Text style={styles.footerTitleStyle}>Now Playing: {this.state.currentArticleTitle.slice(0, 15)}...</Text>
          </View>
        </View>
      </View>

    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#87DBFD',
    marginBottom: 20,
    alignItems: 'center',
    height: 48,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row'
  },
  playerStyle:{
    flexDirection: 'row',
    paddingLeft: 10
  },
  footerStyle: {
    flexDirection: 'row',
    width: '100%',
  },
  footerTitleStyle:{
    color: '#334B5D',
    paddingRight: 20
  },
  buttonStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#334B5D'
  },
  textStyle: {
    fontSize: 20
  }
};

const mapStateToProps = state => ({
  currentArticle: state.currentArticle,
  audio: state.audio
});

export default connect(mapStateToProps, null)(Footer);
