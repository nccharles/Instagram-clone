import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default class AddMediaTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> AddNedia </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });