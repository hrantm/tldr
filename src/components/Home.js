import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { rawTextChanged } from '../actions';
import { connect } from 'react-redux';

class Home extends React.Component {

  onTextChange (e) {
    console.log("e:", e);
    // debugger
    this.props.rawTextChanged(e);
  }

  onButtonPress () {
    console.log("hi");
  }

  render () {
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
const mapStateToProps = ({ notes }) => {
  const { rawText } = notes;
  return { rawText };
};

export default connect(mapStateToProps, {
rawTextChanged } )(Home);
