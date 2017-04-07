import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { rawTextChanged, createNote } from '../actions';
import { connect } from 'react-redux';
import Recorder from './Recorder';

class Home extends React.Component {

  onTextChange (e) {
    this.props.rawTextChanged(e);
  }

  onButtonPress () {
    this.props.createNote(this.props.rawText);
  }

  render () {
    // <Recorder />

    return (
        <Card>
          <CardSection>
            <Input
              label="Text"
              onChangeText={this.onTextChange.bind(this)}
              value={this.props.rawText}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Enter Data
            </Button>
          </CardSection>
        </Card>
    );
  }
}

// export default Home;
const mapStateToProps = ({ record }) => {
  const { rawText } = record;
  return { rawText };
};

export default connect(mapStateToProps, {
rawTextChanged,
createNote } )(Home);
