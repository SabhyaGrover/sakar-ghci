import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSearchBar5 from "../components/MaterialSearchBar5";

function Profile(props) {
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
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  badges: {
    color: "#121212",
    fontSize: 23,
    marginTop: 3
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
  badgesRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 241,

  },
  image1: {
    width: 146,
    height: 87
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
  usernameRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 31,
    marginRight: 36
  },
  email: {
    color: "#121212",
    fontSize: 23,
    marginTop: 28
  },
  materialSearchBar5: {
    flexGrow:1
  },
  emailRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 84,
    marginLeft: 31,
    marginRight: 36
  },
  gender: {
    color: "#121212",
    fontSize: 23
  },
  rect2: {
    width: 161,
    height: 36,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "rgba(230,188,253,1)",
    marginLeft: 58
  },
  female: {
    color: "rgba(74,74,74,1)",
    lineHeight: 35,
    fontSize: 19,
    marginTop: 1,
    marginLeft: 37
  },
  genderRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 31,
    marginRight: 36
  },
  age2: {
    color: "#121212",
    fontSize: 23
  },
  rect3: {
    width: 161,
    height: 36,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "rgba(230,188,253,1)",
    marginLeft: 95
  },
  female1: {
    color: "rgba(74,74,74,1)",
    lineHeight: 35,
    fontSize: 22,
    marginTop: 1,
    marginLeft: 44
  },
  age2Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 31,
    marginRight: 33
  },
  region: {
    color: "#121212",
    fontSize: 23
  },
  rect4: {
    width: 161,
    height: 36,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "rgba(230,188,253,1)",
    marginLeft: 64
  },
  india: {
    color: "rgba(74,74,74,1)",
    lineHeight: 35,
    fontSize: 22,
    marginTop: 1,
    marginLeft: 34
  },
  regionRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 26,
    marginLeft: 31,
    marginRight: 33
  }
});

export default Profile;
