import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSlider1 from '../components/MaterialSlider1';
import {firebase} from './config';


function Profile(props) {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

        <View style={styles.imageColumn}>
          <FontAwesomeIcon
            name="user-circle"
            style={styles.icon}
          ></FontAwesomeIcon>

          <Text style={styles.myProfile}>Profile</Text>
      </View>

      <View style={{alignSelf:'center',flexDirection:'row'}}>
      <EntypoIcon name="star" style={styles.icon3}/>
      <EntypoIcon name="star" style={styles.icon3}/>
      </View>

      <View style ={styles.imageColumn}>
      <Text style={styles.username}>Username</Text>
          <View style={styles.rect}>
          <Text style={styles.Text}>Edit name</Text>
        </View>
        </View>

        <View style={styles.imageColumn}>
        <Text style={styles.username}>Email</Text>
        <View style={styles.rect}>
          <Text style={styles.Text}>Edit email</Text>
        </View>
        </View>

        <View style ={styles.imageColumn}>
      <Text style={styles.username}>Gender</Text>
          <View style={styles.rect}>
          <Text style={styles.Text}>Add Gender</Text>
        </View>
        </View>

        <View style ={styles.imageColumn}>
      <Text style={styles.username}>Age</Text>
          <View style={styles.rect}>
          <Text style={styles.Text}>Add age</Text>
        </View>
        </View>

        <View style ={styles.imageColumn}>
      <Text style={styles.username}>Region</Text>
          <View style={styles.rect}>
          <Text style={styles.Text}>Add Region</Text>
        </View>
        </View>
        <View style = {{flexDirection:'column',marginTop:50,alignContent:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold'}}>Course Progress</Text>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Video 1</Text>
        <MaterialSlider1 style={{alignSelf:'center'}}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Video 2</Text>
        <MaterialSlider1 style={{alignSelf:'center'}}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Video 3</Text>
        <MaterialSlider1 style={{alignSelf:'center'}}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Video 4</Text>
        <MaterialSlider1 style={{alignSelf:'center'}}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Video 5</Text>
        <MaterialSlider1 style={{alignSelf:'center'}}/>
        </View>

        </View>
        <TouchableOpacity
                    onPress={() => {
                      firebase.auth().signOut()
                      .then(
                        () => {
                        navigation.navigate('Welcome to Sakar!')
                        }
                        )
                      .catch( (error) => {alert(error)}  )
                    }}>
                    <Text style={styles.buttonTitle}>Log Out</Text>
                </TouchableOpacity>
        <Text style={{justifyContent:'center',marginBottom:0,marginTop:0}}>Developed with ❤️ | Team HobbyHacks </Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50,
    alignItems:'center',
    justifyContent:'center'
  },
  rect: {
    width: 161,
    height: 35,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "rgba(230,188,253,1)",
    alignSelf:'flex-end'
  },
  icon3: {
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 35,

  },
  icon: {
    color: "rgba(105,105,105,1)",
    fontSize: 61,
  },
  imageColumn: {
    width:'100%',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignSelf:'center',
    flexDirection:'row',
    marginTop:20
  },
  myProfile: {
    color: "#121212",
    fontSize: 25,

  },
  imageColumnRow: {
   flexDirection:'column',
   justifyContent:'space-around',
   alignContent:'space-between'
  },
  username: {
    color: "#121212",
    fontSize: 18,
    marginTop:10,
    alignSelf:'flex-start'
  },
  rect: {
    width: '40%',
    height: 35,
    borderWidth: 1,
    borderColor: "rgba(72,20,128,1)",
    alignContent:'center'
  },
  Text: {

    color: "rgba(128,128,128,1)",
    lineHeight: 35,
    fontSize: 19,
    alignSelf:'center'
  },

});

export default Profile;
