import React from 'react';
import { View, Text, Button } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';


const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
}, {
  initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
