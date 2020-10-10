import * as React from 'react';
import {View } from 'react-native';
import { Chip } from 'react-native-paper';
import {firebase} from './config';

export default function InterestChip(){

  //add route back to home, with button
  return(
  <View style={{marginTop:100, flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}>
  <Chip icon="information" onPress={() => console.log(rec.Basics)}>Basics</Chip>
  <Chip icon="information" onPress={() => console.log(rec.AppDev)}>App Development</Chip>
  <Chip icon="information" onPress={() => console.log(rec.CP)}>CP</Chip>
  <Chip icon="information" onPress={() => console.log(rec.AI)}>AI</Chip>
  <Chip icon="information" onPress={() => console.log(rec.WebDev)}>Web Development</Chip>
  <Chip icon="information" onPress={() => console.log(rec.ioT)}>ioT</Chip>
  </View>
)
}
