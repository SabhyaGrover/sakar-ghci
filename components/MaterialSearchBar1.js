import React, { Component } from "react";
import { StyleSheet, View, TextInput, Image } from "react-native";

function MaterialSearchBar1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1Stack}>
        <View style={styles.rect1}>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
        </View>
        <Image
          source={require("../assets/images/logo-removebg.png")}
          resizeMode="contain"
          style={styles.image1}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    position: "absolute",
    top: 2,
    bottom: 6,
    left: 12,
    right: 0
  },
  inputStyle: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 308,
    lineHeight: 16,
    marginLeft: 57
  },
  image1: {
    top: 0,
    left: 0,
    width: 60,
    height: 54,
    position: "absolute"
  },
  rect1Stack: {
    flex: 1,
    marginTop: 2,
    marginLeft: -8,
    marginRight: 6
  }
});

export default MaterialSearchBar1;
