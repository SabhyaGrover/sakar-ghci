import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View gradientImage="Gradient_wvmVquI.png" style={styles.rect1}>
        <View style={styles.leftIconButtonRow}>
          <TouchableOpacity style={styles.leftIconButton}>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={styles.leftIcon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TextInput placeholder="Search" style={styles.inputStyle}></TextInput>
        </View>
        <View style={styles.leftIconButtonRowFiller}></View>
        <TouchableOpacity style={styles.rightIconButton}>
          <MaterialCommunityIconsIcon
            name="close"
            style={styles.rightIcon}
          ></MaterialCommunityIconsIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4
  },
  rect1: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    flex: 1,
    marginBottom: 20
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    height: 30,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 110,
    lineHeight: 16,
    marginLeft: 8,
    marginTop: 9
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: -5,
    marginTop: -9
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center",
    marginTop: -9
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  }
});

export default MaterialSearchBar;
