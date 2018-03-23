import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import {StackNavigator,TabNavigator} from 'react-navigation'
import MainScreen from '../Container/screens/MainScreen';
import SearchTab from '../Container/screens/Tabs/SearchTab';
import HomeTab from '../Container/screens/Tabs/HomeTab';
import ProfileTab from '../Container/screens/Tabs/ProfileTab';
import LikesTab from '../Container/screens/Tabs/LikesTab';
import AddMediaTab from '../Container/screens/Tabs/AddMediaTab';
export default class AppNavigator extends Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = StackNavigator({
    Main: {
        screen: MainScreen
    }
})