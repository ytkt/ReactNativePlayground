import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class Greeting extends Component {
  render() {
    return (
        <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
        </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
        <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Hi' />
        <Greeting name='There' />
        <Greeting name='What is up' />
        </View>
    );
  }
}
