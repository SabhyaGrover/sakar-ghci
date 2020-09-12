import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function MaterialSearchBar5(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.rect1}>
        <TextInput
          placeholder="Kristi3@gmail.com"
          style={styles.inputStyle}
        ></TextInput>
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
    borderColor: "rgba(155,155,155,1)"
  },
  rect1: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderRadius: 2,
    flex: 1,
    marginBottom: 4,
    marginTop: 4,
    marginLeft: 4,
    marginRight: 4
  },
  inputStyle: {
    height: 48,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 351,
    lineHeight: 16,
    marginLeft: 14
  }
});

export default MaterialSearchBar5;
