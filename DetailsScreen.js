import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
  render() {
    return (
        <View style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}>
      <Text>Detail Screen</Text>
      </View>
    );
  }
}
