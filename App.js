import React, { useEffect, useState } from 'react';
import {StyleSheet} from 'react-native';

import Todo from './screens/Todo';
import Interests from './screens/Interests';
import Home from './screens/Home';
import leaderboard from './screens/leaderboard';
import demologin from './screens/demologin';
import Registration from './screens/Registration';
import { NavigationContainer } from '@react-navigation/native';

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
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="user" style={styles.icon} color={tintColor} size={25} />
          )}} />

        <Tab.Screen name='ToDo' component={Todo} options={{
          tabBarLabel: 'ToDo',
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="pencil" style={styles.icon} color={tintColor} size={25} />
          )}}/>

          <Tab.Screen name='LeaderBoard' component={leaderboard} options={{
          tabBarLabel: 'Board',
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="trophy" style={styles.icon} color={tintColor} size={25} />
          )}}/>

    </Tab.Navigator>
    
  );
}


export default function App() {
 
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen name = 'login' component = { demologin} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name = 'Interest' component = { Interests } />
        <Stack.Screen name = 'leaderboard' component = {leaderboard } />

        <Stack.Screen name = 'HomeScreen' component = {HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  icon: {
    color: "white",
    justifyContent:'center',
    alignSelf: "center"
  },
});