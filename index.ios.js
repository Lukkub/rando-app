/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import MenuBlockList from "./components/menuBlockList.js";
import Header from "./components/header.js";

class randApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Header />
        <MenuBlockList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.9)',
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

AppRegistry.registerComponent('randApp', () => randApp);
