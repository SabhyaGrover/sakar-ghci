import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialSearchBar3 from "../components/MaterialSearchBar3";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <MaterialSearchBar3
        style={styles.materialSearchBar3}
      ></MaterialSearchBar3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialSearchBar3: {
    height: 56,
    width: 375,
    marginTop: 40,
    marginLeft: -7
  }
});

export default Untitled1;
