
import React from 'react';
//import MaterialIconButtonsFooter from './components/MaterialIconButtonsFooter';
import login from './screens/login';
//import footer from './screens/footer';
import SignUp from './screens/SignUp';
import Todo from './screens/Todo';
import Interests from './screens/Interests';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
//import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function HomeScreen(){
  return(
    <Tab.Navigator >

        <Tab.Screen  name = 'Home' component = {Home}/>
        <Tab.Screen name='ToDo' component={Todo}/>
    </Tab.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name = 'login' component = { login } />
        <Stack.Screen name = 'SignUp' component = { SignUp } />
        <Stack.Screen name = 'Interest' component = { Interests } />
        <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}



 
  
