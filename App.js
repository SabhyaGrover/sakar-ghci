
import React from 'react';
import {StyleSheet} from 'react-native';
//import MaterialIconButtonsFooter from './components/MaterialIconButtonsFooter';
import login from './screens/login';
//import footer from './screens/footer';
import SignUp from './screens/SignUp';
import Todo from './screens/Todo';
import Interests from './screens/Interests';
import Home from './screens/Home';
import leaderboard from './screens/leaderboard';

import { NavigationContainer } from '@react-navigation/native';
//import { render } from 'react-dom';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function HomeScreen(){
  return(

    <Tab.Navigator barStyle = {{ backgroundColor : '#481480' }}>
            <Tab.Screen 
         name = 'Home' component = {Home} options={{
          tabBarLabel: 'Home',
          tabIcon: ({  tintColor }) => (
                <EvilIconsIcon name="user" style={style.icon1} color={tintColor} size={25} />
          )}} />
        
        <Tab.Screen name='ToDo' component={Todo}/>
        <Tab.Screen name='leaderboard' component={leaderboard}/>


    </Tab.Navigator>
    
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name = 'login' component = { login }  />
        <Stack.Screen name = 'SignUp' component = { SignUp } />
        <Stack.Screen name = 'Interest' component = { Interests } />
        <Stack.Screen name = 'leaderboard' component = {leaderboard } />

        <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  icon1: {
    color: "white",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
});


 
  
