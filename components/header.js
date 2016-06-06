import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = React.createClass({

  getInitialState: function() {
    return {
      isActive: true
    };
  },

  render: function() {
    return (
      <View style={styles.head}>
        <View style={styles.line}/>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            About
          </Text>
          <Text style={styles.text}>
            RANDO
          </Text>
          <Text style={styles.text}>
            Help
          </Text>
        </View>
        <View style={styles.line}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  head: {
  },
  textRow: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  line: {
    height: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: 500,
    borderBottomWidth: 5,
    borderColor: 'rgba(227,133,18,1)'
  },
  text: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
    fontFamily: 'Courier New',
    fontWeight: 'bold'
  }
});

export default Header;
