import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardBasic from "./components/MaterialCardBasic";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialCardBasic style={styles.materialCardBasic}></MaterialCardBasic>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 359,
    height: 282
  },
  materialCardBasic: {
    height: 282,
    width: 359
  }
});

export default Index;
