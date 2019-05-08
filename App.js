import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  }
});

export default class App extends React.Component {
  render() {
    return (
        <View style={{alignItems: 'center', top: 50}}>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigBlue}>just BigBlue</Text>
        <Text style={[styles.bigBlue, styles.red]}>bigBlue, then red</Text>
        <Text style={[styles.red, styles.bigBlue]}>red, then bigBlue</Text>
        </View>
    );
  }
}
