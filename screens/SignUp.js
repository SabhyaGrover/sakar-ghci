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
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";

function SignUp(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.background}>
        <ImageBackground
          style={styles.rect2}
        >
          <View style={styles.text3Column}>
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
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.emailInput}
                  ></TextInput>
                </View>
                <View style={styles.age}>
                  <EvilIconsIcon
                    name="archive"
                    style={styles.icon9}
                  ></EvilIconsIcon>
                  <TextInput
                    placeholder="Age"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry={false}
                    style={styles.ageInput}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.nameColumnFiller}></View>
              <View style={styles.password}>
                <EvilIconsIcon name="lock" style={styles.icon7}></EvilIconsIcon>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor="rgba(255,255,255,1)"
                  secureTextEntry={true}
                  style={styles.passwordInput}
                ></TextInput>
              </View>
            </View>
            <View style={styles.region}>
              <EvilIconsIcon
                name="location"
                style={styles.icon8}
              ></EvilIconsIcon>
              <TextInput
                placeholder="Region"
                placeholderTextColor="rgba(255,255,255,1)"
                secureTextEntry={false}
                style={styles.regionInput}
              ></TextInput>
            </View>
          </View>
          <View style={styles.text3ColumnFiller}></View>
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
    backgroundColor:"white"
  },
  rect2_imageStyle: {},
  text3: {
    color: "purple",
    fontSize: 24,
    alignSelf: "center"
  },
  form: {
    height: 230,
    marginTop: 52
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
    marginTop: 20
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
  age: {
    height: 59,
    backgroundColor: "#e1bee7",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 25
  },
  icon9: {
    color: "white",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  ageInput: {
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
    flexDirection: "row",
    marginBottom: -150
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
  region: {
    height: 59,
    backgroundColor: "#e1bee7",
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 12
  },
  icon8: {
    color: "white",
    fontSize: 33,
    marginLeft: 15,
    alignSelf: "center"
  },
  regionInput: {
    height: 30,
    color: "white",
    flex: 1,
    marginRight: 17,
    marginLeft: 13,
    marginTop: 14
  },
  text3Column: {
    marginTop: 56,
    marginLeft: 41,
    marginRight: 41
  },
  text3ColumnFiller: {
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
    color: "white",
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
