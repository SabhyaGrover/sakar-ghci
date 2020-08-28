
import React from 'react';
import MaterialIconButtonsFooter from './components/MaterialIconButtonsFooter';
import login from './screens/login';
//import footer from './screens/footer';
import SignUp from './screens/SignUp';
import Todo from './screens/Todo';
import Interests from './screens/Interests';
import Channels1 from './screens/Channels1';
import { NavigationContainer } from '@react-navigation/native';
import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function App() {
  return (       
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = 'channels1' component = { Channels1 } />
        <Stack.Screen name = 'login' component = { login } />
        <Stack.Screen name = 'SignUp' component = { SignUp } />
        <Stack.Screen name = 'Interest' component = { Interests } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



 
  
