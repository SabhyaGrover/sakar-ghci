import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import MaterialIconButtonsFooter from "../components/MaterialIconButtonsFooter";
import MaterialButtonWithShadow from "../components/MaterialButtonWithShadow";
import MaterialButtonPink from "../components/MaterialButtonPink";

export default function Todo(props) {
  return (
    <View style={styles.container}>
       <Text style={styles.list}>List</Text>
       <View style={styles.entry} >
       <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
      </View>
    <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
      </View>
 <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>
      </View>
 <View style={styles.listRow}>
       <MaterialButtonWithShadow
          style={styles.materialButtonWithShadow}
        ></MaterialButtonWithShadow>
      <MaterialButtonPink
        style={styles.materialButtonPink}
      ></MaterialButtonPink>

      </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'flex-start',

  },
  entry:
  {
    marginTop:100,
  },
  list: {
    marginTop:100,
    justifyContent:'center',
    color: "#121212",
    fontSize: 28
  },
  materialButtonWithShadow: {
  },
  listRow: {
    alignSelf:'center',
    marginTop:10,
    flexDirection:'row'
  },
  materialButtonPink: {
    alignContent:'center',
    width:'70%'
  }
});
