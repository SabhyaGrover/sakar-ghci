import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialButtonPink from "../components/MaterialButtonPink";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <MaterialIconButtonsFooter
        style={styles.materialIconButtonsFooter}
      ></MaterialIconButtonsFooter>
      <View style={styles.listRow}>
        <Text style={styles.list}>List</Text>
        <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      </View>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialIconButtonsFooter: {
    height: 56,
    width: 375,
    marginTop: 738
  },
  list: {
    fontFamily: "roboto-re",
    color: "#121212",
    fontSize: 28
  },
  materialButtonWithShadow: {
    height: 36,
    width: 85,
    marginLeft: 57
  },
  listRow: {
    height: 36,
    flexDirection: "row",
    marginTop: -704,
    marginLeft: 165,
    marginRight: 23
  },
  materialButtonPink: {
    height: 46,
    width: 311,
    marginTop: 53,
    marginLeft: 41
  }
});

export default Untitled1;
