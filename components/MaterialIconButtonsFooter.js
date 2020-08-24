import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function MaterialIconButtonsFooter(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.buttonWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper2}>
        <MaterialCommunityIconsIcon
          name="AssignmentTurnedIn"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper3}>
        <MaterialCommunityIconsIcon
          name="trophy"
          style={styles.icon4}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper3}>
        <MaterialCommunityIconsIcon
          name="save"
          style={styles.icon2}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonWrapper3}>
        <MaterialCommunityIconsIcon
          name="Profile"
          style={styles.icon5}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      
      
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(156,53,178,1)",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 1,
    shadowRadius: 1.2,
    elevation: 3
  },
  buttonWrapper1: {
    flex: 0.29,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper3: {
    flex: 0.34,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  buttonWrapper4: {
    flex: 0.34,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
  },
  icon5: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 24,
    opacity: 0.8
    
  },
  icon6: {
    top: 7,
    left: 230,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 32,
    flex: 0.01
  },
  icon7: {
    top: 9,
    left: 329,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    flex: 0.01,
    width: 37,
    height: 40
  }
});

export default MaterialIconButtonsFooter;
