import React, { Component } from 'react';
import { Alert, Button, View } from 'react-native';

export default class App extends Component {
  _onPressButton() {
    Alert.alert('you tapped the button!!');
  }

  render() {
    return (
        <View style={{
          padding: 10,
          flex: 1,
          justifyContent: 'center',
        }}>
        <Button
          onPress={this._onPressButton}
          title="Press me"
        />
        </View>
    );
  }
}
