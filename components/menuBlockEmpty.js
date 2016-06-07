import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert, TouchableHighlight } from 'react-native';

const MenuBlockEmpty = React.createClass({

  getInitialState: function() {

    var data = this.props.data;

    return {
      isActive: true,
      data: data
    };
  },

  onBlockClick: function(){
    Alert.alert('Data', 'nothing');
  },

  render: function() {
    return (
      <TouchableHighlight onPress={this.onBlockClick}>
        <View style={styles.block}>
          <Text style={styles.text}>
            ...
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'rgba(0,0,0, 0.9)',
    margin: 10,
    width: Dimensions.get("window").width - 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#F5FCFF',
    fontFamily: 'Courier New',
    fontWeight: 'bold'
  }
});

export default MenuBlockEmpty;
