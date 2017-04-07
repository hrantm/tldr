import React from 'react';
import { Text, ScrollView, Image, View } from 'react-native';
import { CardSection } from './common';

class ArticleShow extends React.Component {

  flatten(arr) {
    const flattened = []

    arr.forEach( el => {
      if (Array.isArray(el)) {
        el.forEach(sent => {
          flattened.push(sent)
        })
      }
    })
    return flattened
  }

  render () {
    const { article } = this.props;
    console.log(article.smmry);
    const sentences = article.smmry.split(". ").map((el, idx)=> {
                                                      if(idx !== article.smmry.split('. ').length - 1){
                                                        return el.concat('. ')
                                                      }
                                                      return el.concat(" ")
                                                    })

    const finalSentences = sentences.map(sentence => {
      return sentence.split(`." `)
    })
    const output = this.flatten(finalSentences)

    const realOutput = output.map( el => {
      console.log(el.slice(-2));
      console.log(el.slice(-2) !== `. `);
      if(el.slice(-2) !== `. `) {
        return el.concat(`." `)
      }
      return el
    })


    console.log(realOutput);
    return (
      <ScrollView>
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
  }
};

export default ArticleShow;
