import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

export default class LikesTab extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Likes </Text>
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