import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'stretch',
        }}>
        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{height: 100, backgroundColor: 'skyblue'}} />
        <View style={{height: 200, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
}
