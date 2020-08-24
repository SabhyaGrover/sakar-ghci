import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonWithShadow(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.loremIpsum}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.01,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 28,
    marginTop: 2
  }
});

export default MaterialButtonWithShadow;
