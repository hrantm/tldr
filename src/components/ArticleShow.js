import React from 'react';
import { Text,
         View,
         ScrollView,
         Image,
         TouchableOpacity,
         Linking} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Footer } from './common';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/FontAwesome';
import { playCurrentArticle } from '../actions';


class ArticleShow extends React.Component {

  constructor () {
    super();
  }

  flatten(arr) {
    const flattened = [];

    arr.forEach( el => {
      if (Array.isArray(el)) {
        el.forEach(sent => {
          flattened.push(sent);
        });
      }
    });
    return flattened;
  }

  playArticle() {
    console.log('press play article button');
    this.props.playCurrentArticle(this.props.article);
  }

  openUrl () {
    Linking.openURL(this.props.article.url);
  }

  render () {
    const { article } = this.props;
    const sentences = article.smmry.split(". ")
      .map((el, idx)=> {
        if(idx !== article.smmry.split('. ').length - 1){
          return el.concat('. ');
        }
        return el.concat(" ");
      });

    const finalSentences = sentences.map(sentence => sentence.split(`." `));
    const output = this.flatten(finalSentences);

    const realOutput = output.map( el => {
      if(el.slice(-2) !== `. `) {
        return el.concat(`." `);
      }
      return el;
    });

    return (
      <View style={{marginBottom: 48}}>
        <TouchableOpacity onPress={this.playArticle.bind(this)}>
          <Icon style={styles.buttonStyle} name="play" size={15} />
        </TouchableOpacity>
        <ScrollView style={{marginBottom: 20}}>
          <CardSection>
            <Text style={styles.titleStyle}>
              {article.title}
            </Text>
          </CardSection>

          <CardSection style={ styles.thumbnailContainerStyle}>
            <Image source={{uri: article.img_url}} style={styles.thumbnailStyle} />
          </CardSection>

          {realOutput.map((sentence, idx) => {
            return (
              <Text key={idx}style={styles.bodyStyle}>{sentence}</Text>
            )
          })}
          <TouchableOpacity onPress={this.openUrl.bind(this)}>
            <Text style={styles.showMoreStyle}>Show more</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
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
    fontSize: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
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
  },
  showMoreStyle: {
    paddingLeft: 15,
    color: '#0000EE',
    textDecorationLine: 'underline',
    marginTop: 5
  }
};

const mapDispatchToProps = dispatch => ({
  playCurrentArticle: (article) => dispatch(playCurrentArticle(article))
});

export default connect(null, mapDispatchToProps)(ArticleShow);
