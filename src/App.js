import React, {Component} from 'react';
import { StyleSheet, Button, View, StatusBar, TextInput, AsyncStorage, Alert } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = { name: ''}
    this.saveData = this.saveData.bind(this);
  }
    
  saveData = async () => {
    let name = this.state.name;

    try {
      await AsyncStorage.setItem('name', name);
      Alert.alert('Saved', 'Successful');
    } catch (error) {
      Alert.alert('Error', 'There was an error.');
    }

  }

  displayData = async () => {
    try {
      let nameUser = await AsyncStorage.getItem('name');
      Alert.alert('Name', nameUser);
    }

    catch(error) {
        alert(error);
    }
  }

  render() {
    const { container, containerButtons, buttonStyle, textInputStyle } = styles;
    return (
      <View style={container}>
        <StatusBar
          translucen
          backgroundColor="#4f6d7a"
          barStyle="light-content"
        />

        <TextInput
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}
          style={textInputStyle}
          placeholder="Name" />
        <View style={containerButtons}>
          <Button style={buttonStyle} title="Save name" onPress={this.saveData}/>
          <Button style={buttonStyle} title="Get name" onPress={this.displayData}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
  },
  containerButtons: {
    paddingTop: '3%',
  },
  buttonStyle: {
    backgroundColor: '#eee',
  },
  textInputStyle: {
    borderColor: '#000',
    borderWidth: 0.6,
    color: 'black',
    fontSize: 22,
    fontWeight: '400',
    backgroundColor: '#E0E0E0',
    textAlign: 'center',
  },
});
