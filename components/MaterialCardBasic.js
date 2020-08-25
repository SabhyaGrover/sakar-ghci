import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function MaterialCardBasic(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Image
        source={require("../assets/images/1_iIXOmGDzrtTJmdwbn7cGMw.png")}
        style={styles.cardItemImagePlace}
      ></Image>
      <View style={styles.body}>
        <Text style={styles.bodyText}>
          BuilderX is a screen design tool which codes React Native for you.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#CCC",
    flexWrap: "nowrap",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: -2,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    overflow: "hidden"
  },
  cardItemImagePlace: {
    backgroundColor: "#ccc",
    minHeight: 210,
    flex: 1
  },
  body: {
    padding: 16
  },
  bodyText: {
    lineHeight: 20,
    fontSize: 14,
    color: "#424242"
  }
});

export default MaterialCardBasic;
