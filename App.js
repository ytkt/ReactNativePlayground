import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          flexDirection: 'column',
//          justifyContent: 'space-between',
//          justifyContent: 'flex-start',
//          justifyContent: 'center',
//          justifyContent: 'flex-end',
//          justifyContent: 'space-around',
          justifyContent: 'space-evenly',
        }}>
        <View style={{width: 100, height: 100, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}} />
        </View>
    );
  }
}
