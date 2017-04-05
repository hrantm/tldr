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
        <CardSection style={styles.containerStyle}>
          <Text style={styles.titleStyle}>
            {`${rawText.slice(0, 15)}...`}
          </Text>
        </CardSection>
      </TouchableOpacity>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 40,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#2f4f4f"
  },
  containerStyle: {
    borderBottomWidth: 3,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default ListItem;
