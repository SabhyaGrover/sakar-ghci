import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialSearchBarWithBackground(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <View style={styles.leftIconButtonRow}>
          <TouchableOpacity style={styles.leftIconButton}>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={styles.leftIcon}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ffffff"
            style={styles.inputStyle}
          ></TextInput>
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
    backgroundColor: "rgba(162,47,183,1)",
    padding: 4,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    flex: 1
  },
  leftIconButton: {
    padding: 11,
    marginTop: 1
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  },
  inputStyle: {
    height: 48,
    color: "#FFFFFF",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 263,
    lineHeight: 16,
    marginLeft: 45
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 4
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center",
    marginTop: 5
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24
  }
});

export default MaterialSearchBarWithBackground;
