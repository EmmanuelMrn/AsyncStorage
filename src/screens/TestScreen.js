import React, { Component } from 'react';
import { StatusBar, StyleSheet, AsyncStorage, View, Button } from 'react-native';

export default class TestScreen extends Component {

  displayData = async () => {
    try {
      let nameUser = await AsyncStorage.getItem('name');
      alert(nameUser);
    }

    catch(error) {
        alert(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucen
          backgroundColor="#5a5a9b"
          barStyle="light-content"
        />

        <Button title="Get name" onPress={this.displayData}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5a5a9b',
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
