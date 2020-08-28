
import React from 'react';
//import MaterialIconButtonsFooter from './components/MaterialIconButtonsFooter';
import login from './screens/login';
//import footer from './screens/footer';
import SignUp from './screens/SignUp';
import Todo from './screens/Todo';
import Interests from './screens/Interests';
import Channels1 from './screens/Channels1';
import { NavigationContainer } from '@react-navigation/native';
//import { render } from 'react-dom';
//import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name = 'Home' component = {Channels1}/>
        <Tab.Screen name='ToDo' component={Todo}/>
      </Tab.Navigator>
      </NavigationContainer>
  );
}



 
  
