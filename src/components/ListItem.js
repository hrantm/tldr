import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {

  onPress () {
    Actions.noteShow({note: this.props.note});
  }

  render () {
    const { rawText } = this.props.note;
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <CardSection>
          <Text style={styles.titleStyle}>
            {rawText.slice(0, 10)}
          </Text>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
