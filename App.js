
import React from 'react';
import MaterialIconButtonsFooter from './components/MaterialIconButtonsFooter';
import login from './screens/login';
//import footer from './screens/footer';
import SignUp from './screens/SignUp';

import Interests from './screens/Interests';
import { NavigationContainer, TabActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {
  return (       
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'login' component = { login } />
        <Stack.Screen name = 'SignUp' component = { SignUp } />
        <Stack.Screen name = 'Interest' component = { Interests } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



 
  
