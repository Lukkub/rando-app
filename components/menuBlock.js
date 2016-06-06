import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const MenuBlock = React.createClass({

  getInitialState: function() {

    var data = this.props.data;

    return {
      isActive: true,
      data: data
    };
  },

  render: function() {
    return (
      <View style={styles.block}>
        <Text style={styles.text}>
          {this.state.data}
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'black',
    margin: 10,
    width: Dimensions.get("window").width - 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    borderColor: 'rgba(227,133,18,1)',
    borderWidth: 3
    // boxShadow: '0px 0px 20px 18px rgba(227,133,18,1)'
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

export default MenuBlock;
