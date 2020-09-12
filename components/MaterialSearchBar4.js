import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialSearchBar4(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput placeholder="Kristi" style={styles.inputStyle}></TextInput>
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
    borderColor: "rgba(155,155,155,1)",
    justifyContent: "center"
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 2,
    width: 365,
    height: 46,
    marginLeft: 4,
    alignSelf: "center"
  },
  inputStyle: {
    height: 47,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 266,
    lineHeight: 16,
    marginLeft: 14,
    marginTop: -1
  }
});

export default MaterialSearchBar4;
