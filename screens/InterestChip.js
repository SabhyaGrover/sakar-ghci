import * as React from 'react';
import {View } from 'react-native';
import { Chip } from 'react-native-paper';

const MyComponent = () => (
  //add route back to home, with button
  <View style={{marginTop:100, flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
  <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  <Chip icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
  </View>
);

export default MyComponent;