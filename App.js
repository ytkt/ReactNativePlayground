import React, { Component } from 'react';
import { Alert, StyleSheet, FlatList, Image, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
  <FlatList
          data={[
            {key: 'hoge'},
            {key: 'fuga'},
            {key: 'piyo'},
            {key: 'hogehoge'},
            {key: 'fugafuga'},
            {key: 'piyopiyo'},
            {key: 'hogehogehoge'},
            {key: 'fugafugafuga'},
            {key: 'piyopiyopiyo'},
          ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 36,
    height: 88,
  },
})
