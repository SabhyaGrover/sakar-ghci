import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Welcome from './screens/Welcome';
import login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (       
    
        <NavigationContainer>
          <Stack.Navigator>
            
             <Stack.Screen
              name="login"
              component={login}
              options={{ title: 'login' }}
            />
            </Stack.Navigator>
            </NavigationContainer>
            
   
  );
}



 
  
