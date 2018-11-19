import React, { Component } from 'react';
import { StatusBar, StyleSheet, TextInput, View, Button, AsyncStorage } from 'react-native';

export default class DashboardScreen extends Component {
  constructor(props){
    super(props)
    this.state = { name: ''}
    this.saveData = this.saveData.bind(this);
  }
    
  saveData(){
    let name = this.state.name;
    AsyncStorage.setItem('name', name).done();
    this.setState({ name: name });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucen
          backgroundColor="#4f6d7a"
          barStyle="light-content"
        />

        <TextInput
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}
          style={styles.input}
          placeholder="Name" />

        <Button title="Save name" onPress={this.saveData}/>
        <Button title="Go to other screen" onPress={() => navigation.navigate('Settings')} />
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
