import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, useNavigation } from "react-native";

function MaterialButtonGrey(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={() => {
      navigation.navigate('Interests')
    }}>

      <Text style={styles.next}>Next  &gt;&gt;</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#481480",
    justifyContent: "center",
    alignItems: "center",
    alignContent:'center',
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },

  next: {

    position: "absolute",
    color: "#DCDCDC",
    fontSize: 16,

  }
});

export default MaterialButtonGrey;
