import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends React.Component {

  onPress () {
    Actions.articleShow({article: this.props.article})
  }

  render () {
    const { article } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress.bind(this)}>
        <CardSection>
          <Text style={styles.titleStyle}>
            {article.title}
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
