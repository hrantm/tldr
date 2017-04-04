import React from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class NoteShow extends React.Component {

  render () {
    const { rawText } = this.props.note;
    return (
      <CardSection>
        <Text style={styles.titleStyle}>
          {rawText}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default NoteShow;
