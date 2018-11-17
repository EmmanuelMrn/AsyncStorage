import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View, Button, ToastAndroid, AsyncStorage } from 'react-native';

export default class App extends Component {

  onPressButton() {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucen
          backgroundColor="#4f6d7a"
          barStyle="light-content"
        />

        <Button title="click me" onPress={this.onPressButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f6d7a',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
