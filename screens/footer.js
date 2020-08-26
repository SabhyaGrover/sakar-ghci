import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";

function Index(props) {
  return (
    <View style={styles.container}>
      <MaterialIconButtonsFooter
        style={styles.materialIconButtonsFooter}
      ></MaterialIconButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 56
  },
  materialIconButtonsFooter: {
    height: 56,
    width: 400
  }
});

export default Index;
