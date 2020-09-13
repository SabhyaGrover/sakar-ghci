import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialSearchBar5 from "../components/MaterialSearchBar5";

function Untitled6(props) {
  return (
    <View style={styles.container}>
      <View style={styles.badgesRow}>
        <Text style={styles.badges}>Badges</Text>
        <View style={styles.rect}>
          <EntypoIcon name="star" style={styles.icon3}></EntypoIcon>
        </View>
      </View>
      <View style={styles.image1ColumnRow}>
        <View style={styles.image1Column}>
          <Image
            source={require("../assets/images/GHCI1.png")}
            resizeMode="contain"
            style={styles.image1}
          ></Image>
          <FontAwesomeIcon
            name="user-circle"
            style={styles.icon}
          ></FontAwesomeIcon>
        </View>
        <Text style={styles.myProfile}>My Profile</Text>
      </View>
      <View style={styles.usernameRow}>
        <Text style={styles.username}>Username</Text>
        <View style={styles.rect5}>
          <Text style={styles.kristi}>Kristi</Text>
        </View>
      </View>
      <View style={styles.emailRow}>
        <Text style={styles.email}>Email</Text>
        <MaterialSearchBar5
          style={styles.materialSearchBar5}
        ></MaterialSearchBar5>
      </View>
      <View style={styles.genderRow}>
        <Text style={styles.gender}>Gender</Text>
        <View style={styles.rect2}>
          <Text style={styles.female}>Female</Text>
        </View>
      </View>
      <View style={styles.age2Row}>
        <Text style={styles.age2}>Age</Text>
        <View style={styles.rect3}>
          <Text style={styles.female1}>13</Text>
        </View>
      </View>
      <View style={styles.regionRow}>
        <Text style={styles.region}>Region</Text>
        <View style={styles.rect4}>
          <Text style={styles.india}>India</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  badges: {
    fontFamily: "roboto-regular",
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
    marginLeft: 55
  },
  icon3: {
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32,
    marginLeft: 52
  },
  badgesRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 241,
    marginLeft: 31,
    marginRight: 36
  },
  image1: {
    width: 146,
    height: 87
  },
  icon: {
    color: "rgba(162,14,192,1)",
    fontSize: 61,
    marginLeft: 43
  },
  image1Column: {
    width: 146
  },
  myProfile: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 25,
    marginLeft: 23,
    marginTop: 86
  },
  image1ColumnRow: {
    height: 148,
    flexDirection: "row",
    marginTop: -263,
    marginLeft: -10,
    marginRight: 90
  },
  username: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 23
  },
  rect5: {
    width: 161,
    height: 36,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    backgroundColor: "rgba(230,188,253,1)",
    marginLeft: 27
  },
  kristi: {
    fontFamily: "roboto-regular",
    color: "rgba(74,74,74,1)",
    lineHeight: 35,
    fontSize: 19,
    marginLeft: 45
  },
  usernameRow: {
    height: 36,
    flexDirection: "row",
    marginTop: 29,
    marginLeft: 31,
    marginRight: 36
  },
  email: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 23,
    marginTop: 28
  },
  materialSearchBar5: {
    height: 60,
    width: 161,
    backgroundColor: "rgba(230,188,253,1)",
    marginLeft: 75
  },
  emailRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 84,
    marginLeft: 31,
    marginRight: 36
  },
  gender: {
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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

export default Untitled6;
