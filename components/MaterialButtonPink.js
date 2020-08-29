import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPink(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.addNewTodoList}>Add New Todo List</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#b39ddb",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  addNewTodoList: {
    color: "black",
    fontSize: 14
  }
});

export default MaterialButtonPink;
