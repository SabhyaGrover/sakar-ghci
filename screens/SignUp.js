import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import IoniconsIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function SignUp(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
        >
          <View style={styles.progressBarColumn}>
            <View style={styles.progressBar}>
              <View style={styles.icon2Row}>
                <IoniconsIcon
                  name="md-checkmark-circle"
                  style={styles.icon2}
                ></IoniconsIcon>
                <View style={styles.rect4}></View>
                <EntypoIcon name="time-slot" style={styles.icon3}></EntypoIcon>
                <View style={styles.rect5}></View>
              </View>
              <View style={styles.icon2RowFiller}></View>
              <FontAwesomeIcon
                name="circle"
                style={styles.icon4}
              ></FontAwesomeIcon>
            </View>
               
            <Text style={styles.text3}>CREATE ACCOUNT</Text>
            <View style={styles.form}>
              <View style={styles.nameColumn}>
                <View style={styles.name}>
                  <EvilIconsIcon
                    name="user"
                    style={styles.icon5}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Name"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.nameInput}
                  ></TextInput>
                </View>
                <View style={styles.email}>
                  <EvilIconsIcon
                    name="envelope"
                    style={styles.icon6}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Email"
                    placeholderTextColor="white"
                    secureTextEntry={false}
                    style={styles.emailInput}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.nameColumnFiller}></View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon7}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="white"
                  secureTextEntry={true}
                  style={styles.passwordInput}
                ></TextInput>
              </View>
            </View>
          </View>
          <View style={styles.progressBarColumnFiller}></View>
          <View style={styles.buttonColumn}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Timeline")}
              style={styles.button}
            >
              <Text style={styles.text2}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.text4}>Terms &amp; Conditions</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  background: {
    flex: 1
  },
  rect2: {
    flex: 1,
    backgroundColor: "white"
  },
  rect2_imageStyle: {},
  progressBar: {
    height: 40,
    flexDirection: "row",
    marginLeft: 28,
    marginRight: 28
  },
  icon2: {
    color: "#e1bee7",
    fontSize: 40,
    width: 33,
    height: 40
  },
  rect4: {
    width: 50,
    height: 7,
    backgroundColor: "#3f51b5",
    borderRadius: 40,
    marginLeft: 6,
    marginTop: 16
  },
  
  icon3: {
    color: "#e1bee7",
    fontSize: 35,
    width: 40,
    height: 36,
    marginLeft: 4,
    marginTop: 4
  },
  rect5: {
    width: 50,
    height: 7,
    backgroundColor: "#3f51b5",
    opacity: 0.75,
    borderRadius: 40,
    marginTop: 16
  },
  icon2Row: {
    height: 40,
    flexDirection: "row"
  },
  icon2RowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  icon4: {
    color: "#e1bee7",
    fontSize: 40,
    width: 34,
    height: 40,
    opacity: 0.75
  },
  text3: {
    color: "purple",
    fontSize: 24,
    marginTop: 67,
    alignSelf: "center"
  },
  form: {
    height: 230,
    marginTop: 108
  },
  name: {
    height: 59,
    backgroundColor: "#e1bee7",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon5: {
    color: "white",
    fontSize: 33,
    width: 33,
    height: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  nameInput: {
    height: 30,
    color: "white",
    fontSize: 14,
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  email: {
    height: 59,
    backgroundColor: "#e1bee7",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 27
  },
  icon6: {
    color: "white",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  emailInput: {
    height: 30,
    color: "white",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  nameColumn: {},
  nameColumnFiller: {
    flex: 1
  },
  password: {
    height: 59,
    backgroundColor: "#e1bee7",
    borderRadius: 5,
    flexDirection: "row"
  },
  icon7: {
    color: "white",
    fontSize: 33,
    marginLeft: 15,
    marginTop: 13
  },
  passwordInput: {
    height: 30,
    color: "white",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  progressBarColumn: {
    marginTop: 53,
    marginLeft: 41,
    marginRight: 41
  },
  progressBarColumnFiller: {
    flex: 1
  },
  button: {
    height: 55,
    backgroundColor: "#3f51b5",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    justifyContent: "center",
    marginBottom: 55
  },
  text2: {
    width: 66,
    color: "#403B34",
    alignSelf: "center"
  },
  text4: {
    color: "#403B34",
    alignSelf: "center"
  },
  buttonColumn: {
    marginBottom: 31,
    marginLeft: 41,
    marginRight: 41
  }
});

export default SignUp;
