import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
        <Text>{this.props.text}</Text>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
        <View style={{alignItems: 'center', top: 50}}>
        <Blink text='I love to blink' />
        </View>
    );
  }
}
