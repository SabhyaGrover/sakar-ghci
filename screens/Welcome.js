import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
     <Image source={require("../assets/images/sakar_logo.png")} resizeMode='contain' />
     </View>
     <Text style={styles.motto}>#MakeYourDreamSaakar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',

  },
  logo: {
    width: undefined,
    height: '80%'
  },
  moto:{
    textAlign:'center',
    fontWeight:'bold',
  }
});
