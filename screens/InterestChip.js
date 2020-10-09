import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialChipBasic from "../components/MaterialChipBasic";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <MaterialChipBasic style={styles.materialChipBasic}></MaterialChipBasic>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialChipBasic: {
    width: 138,
    height: 32,
    marginTop: 134,
    marginLeft: 32
  }
});

export default Untitled;
