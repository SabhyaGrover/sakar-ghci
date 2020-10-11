import { useNavigation } from "@react-navigation/native";
import { firestore } from "firebase";
import React, { Component } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSlider1 from '../components/MaterialSlider1';
import {firebase} from './config';

function Profile(props) {
  const email = firebase.auth().currentUser.email;
  const name = firebase.auth().currentUser.displayName;
  //console.log(name);
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

        <View >
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

      <View style={styles.imageColumnRow}>

      <View style ={styles.imageColumn}>
      <Text style={styles.username}>Username</Text>
      <Text style={styles.Text}>{name}</Text>
      </View>

        <View style={styles.imageColumn}>
        <Text style={styles.username}>Email</Text>
        <Text style={styles.Text}>{email}</Text>
        </View>


        <View style ={styles.imageColumn}>
          <Text style={styles.username}>Gender</Text>
          <Text style={styles.Text}>Gender</Text>
        </View>

        <View style ={styles.imageColumn}>
      <Text style={styles.username}>Age</Text>
          <Text style={styles.Text}>Age</Text>

        </View>

        <View style ={styles.imageColumn}>
      <Text style={styles.username}>Region</Text>
          <Text style={styles.Text}>Region</Text>

        </View>
        </View>
        <View style = {{flexDirection:'column',marginTop:50,alignContent:'center'}}>
          <View style={{alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold',alignSelf:'stretch'}}>Course Progress</Text>
      </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Course 5</Text>
        <MaterialSlider1 style={{alignSelf:'center'}} value={0.3} />
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Course 4</Text>
        <MaterialSlider1 style={{alignSelf:'center'}} value={0.5}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Course 3</Text>
        <MaterialSlider1 style={{alignSelf:'center'}} value={1}/>
        </View>

        <View style={{flexDirection:'row'}}>
        <Text style={styles.username}>Course 2</Text>
        <MaterialSlider1 style={{alignSelf:'center'}} value={0.7}/>
        </View>

       

        </View>
        <TouchableOpacity
        style={styles.button}
                    onPress={() => {
                      firebase.auth().signOut()
                      .then(
                        () => {
                        navigation.navigate('Welcome to Sakar!',{screen:'Welcome to Sakar!'})
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
    alignItems:'center',
    alignSelf:'flex-start',
    flexDirection:'row',
    marginTop:20
  },
  myProfile: {
    color: "#121212",
    fontSize: 25,

  },
  button: {
    backgroundColor: '#8B008B',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom:10,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
   
  

  
},
  imageColumnRow: {
   flexDirection:'column',
   justifyContent:'space-around',
   alignContent:'space-around',
  },
  username: {
    color: "#121212",
    fontSize: 18,
    textAlign:'center',
    textAlignVertical:'center',
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
    marginLeft:30,
    color: "rgba(128,128,128,1)",
    lineHeight: 35,
    fontSize: 18,

  },
  button: {
    backgroundColor: '#8B008B',
    paddingLeft: 20,
    paddingRight: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom:10,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
   
  
   
    
},
  buttonTitle:{
    color: 'white',
    marginTop:-5,
    fontSize: 16,
    fontWeight: "bold",
    alignSelf:'stretch',
    textAlign:'center'
  },

});

export default Profile;
