import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Welcome from './screens/Welcome';
import login from './screens/login';
import Todo from './screens/Todo';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
const RootStack = createStackNavigator(
  {
    LogIn: { screen: login},
    SignUp: { screen: SignUp},
  },
  {
    initialRouteName:'LogIn'
  }
);

export default function App() {
  return (       
    <RootStack />
  );
}



 
  
