import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Welcome from './screens/Welcome';
import login from './screens/login';
import footer from './screens/footer';
import SignUp from './screens/SignUp';
import Index from './screens/index';
import Interests from './screens/Interests';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {
  return (       
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'login' component = { login } />
        <Stack.Screen name = 'SignUp' component = { SignUp } />
<<<<<<< HEAD
        
        <Stack.Screen name = 'interest' component = { Interests } />
=======
        <Stack.Screen name = 'Todo' component ={ Todo } />
        <Stack.Screen name = 'Interest' component = { Interests } />
>>>>>>> 80180c5152a4a02f3a9968b49ca6b74072fb4b5d
        <Stack.Screen name = 'footer' component ={ footer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



 
  
