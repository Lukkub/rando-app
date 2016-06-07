import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = React.createClass({

  getInitialState: function() {
    return {
      isActive: true
    };
  },

  onInfoClick: function(){
    Alert.alert('Alert Title', 'onInfoClick');
  },

  onAboutClick: function(){
    Alert.alert('Alert Title', 'onAboutClick');
  },

  render: function() {
    return (
      <View style={styles.head}>
        <View style={styles.line}/>
        <View style={styles.textRow}>
          <TouchableHighlight onPress={this.onInfoClick}>
            <Icon name="info-circle" size={25} color="#F5FCFF" style={styles.icon}/>
          </TouchableHighlight>
          <Text style={styles.text}>
            RANDO
          </Text>
          <TouchableHighlight onPress={this.onAboutClick}>
            <Icon name="question-circle" size={25} color="#F5FCFF" style={styles.icon}/>
          </TouchableHighlight>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  icon: {
    marginRight: 50,
    marginLeft: 50
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
