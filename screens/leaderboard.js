import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function Untitled3(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leaderBoardStack}>
        <Text style={styles.leaderBoard}>LeaderBoard</Text>
        <Image
          source={require("../assets/images/GHCI.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  leaderBoard: {
    top: 86,
    position: "absolute",
    fontFamily: "open-sans-regular",
    color: "#121212",
    fontSize: 30,
    left: 86
  },
  image: {
    top: 0,
    left: 0,
    width: 173,
    height: 111,
    position: "absolute"
  },
  leaderBoardStack: {
    width: 267,
    height: 127,
    marginLeft: -9
  }
});

export default Untitled3;
