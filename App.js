import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Welcome from './screens/Welcome';
import login from './screens/login';
import Todo from './screens/Todo';
import SignUp from './screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';
export { default as SignUp } from "./screens/SignUp.js";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (       
    
        <NavigationContainer>
          <Stack.Navigator>
            
             <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ title: 'SignUp' }}
            />
            </Stack.Navigator>
            </NavigationContainer>
           
   
  );
}



 
  
