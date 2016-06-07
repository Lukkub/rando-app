import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MenuBlock from "./menuBlock.js";
import MenuBlockEmpty from "./menuBlockEmpty.js";

const MenuBlockList = React.createClass({

  getInitialState: function() {
    return {
      listData: [1, 2, 3, 4]
    };
  },

  generateList: function(){
    var objects = [];
    var listData = this.state.listData;
    for(var i=0; i<listData.length; i++){
      var obj = listData[i];
      obj = <MenuBlock key={i} data={obj}/>;
      objects.push(obj);
    }

    objects.push(<MenuBlockEmpty key={i}/>);

    return objects;
  },

  render: function() {
    return (
      <View style={styles.block}>
        <ScrollView
          style={[styles.scrollView, styles.horizontalScrollView]}>
          {this.generateList()}
        </ScrollView>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  block: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  scrollView: {
    flex:1
  }
});

export default MenuBlockList;
