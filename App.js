import React, { useEffect, useState ,Component} from 'react';
import {StyleSheet} from 'react-native';
import Todo from './screens/Todo';
import Interests from './screens/Interests';
import Home from './screens/Home';
import leaderboard from './screens/leaderboard';
import login from './screens/login';
import Registration from './screens/Registration';
import profile from './screens/profile';
import player from './screens/player';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
//import { set } from 'react-native-reanimated';
import { firebase } from './screens/config';

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

function Sakar(){
  return(

    <Tab.Navigator barStyle = {{ backgroundColor : '#481480' }}>
            <Tab.Screen
         name = 'Home' component = {Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="tag" style={styles.icon} color={tintColor} size={25} />
          )}} />

        <Tab.Screen name='ToDo' component={Todo} options={{
          tabBarLabel: 'To Do',
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="pencil" style={styles.icon} color={tintColor} size={25} />
          )}}/>

          <Tab.Screen name='Leaderboard' component={ leaderboard } options={{
          tabBarLabel: 'Leaderboard',
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="trophy" style={styles.icon} color={tintColor} size={25} />
          )}}/>
           <Tab.Screen
         name = 'profile' component = {profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({  tintColor }) => (
                <EvilIconsIcon name="user" style={styles.icon} color={tintColor} size={25} />
          )}} /> 

    </Tab.Navigator>
    
  );
}


export default function App() {
 
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase
    .auth().onAuthStateChanged((user) => {
      if(user){
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
           //console.log(userData);
          })
          .catch((error) => {
            setLoading(false)
          });

      } else {
        setLoading(false)
      }
    })
  })
  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user?        (
          <>
          <Stack.Screen name = 'Sakar' component = {Sakar}  options ={{headerShown:false}}/>
          </>
        ):
        (
          <>
           <Stack.Screen name= 'Registration' component={Registration}  options ={{headerShown:false}}/>
          </>
        )}

      <Stack.Screen name = 'Welcome to Sakar!' component = { login}  options ={{headerShown:false}}/>
      <Stack.Screen name = 'player' component = {player}  options ={{headerShown:false}}/>
      <Stack.Screen name = 'Interest' component = { Interests }  options ={{headerShown:false}}/>
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