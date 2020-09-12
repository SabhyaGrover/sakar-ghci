import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function MaterialButtonTransparentHamburger(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="md-send" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 26,
    alignSelf: "center"
  }
});

export default MaterialButtonTransparentHamburger;
