import React from 'react';
import { Text, ScrollView } from 'react-native';
import { CardSection } from './common';

class NoteShow extends React.Component {

  render () {
    const { rawText } = this.props.note;
    return (
      <ScrollView>
        <Text style={styles.titleStyle}>
          {rawText}
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

export default NoteShow;
