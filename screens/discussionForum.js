import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import MaterialSearchBar from "../components/MaterialSearchBar";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/images/logo-removebg.png")}
            resizeMode="contain"
            style={styles.image}
          ></Image>
          <MaterialSearchBar
            style={styles.materialSearchBar}
          ></MaterialSearchBar>
        </View>
        <View style={styles.rect}>
          <View style={styles.discussionForumRow}>
            <Text style={styles.discussionForum}>Discussion Forum</Text>
            <EntypoIcon
              name="chevron-small-down"
              style={styles.icon}
            ></EntypoIcon>
          </View>
        </View>
        <View style={styles.rect2}>
          <View style={styles.icon2Row}>
            <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon2}
            ></FontAwesomeIcon>
            <View style={styles.solvingRecursionColumn}>
              <Text style={styles.solvingRecursion}>Solving Recursion</Text>
              <Text style={styles.loremIpsum}>
                Lorem ipsum dolor sit amet dolor{"\n"}consectetuer
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.rect4}>
          <View style={styles.icon3Row}>
            <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon3}
            ></FontAwesomeIcon>
            <View style={styles.whatIsDpColumn}>
              <Text style={styles.whatIsDp}>What is dp?</Text>
              <Text style={styles.loremIpsum1}>
                Lorem ipsum dolor sit amet dolor{"\n"}consectetuer
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.materialUnderlineTextboxStack}>
          <MaterialUnderlineTextbox
            style={styles.materialUnderlineTextbox}
          ></MaterialUnderlineTextbox>
          <MaterialButtonTransparentHamburger
            style={styles.materialButtonTransparentHamburger}
          ></MaterialButtonTransparentHamburger>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 355,
    height: 668,
    marginTop: 53,
    marginLeft: 11
  },
  image: {
    width: 66,
    height: 51
  },
  materialSearchBar: {
    height: 32,
    width: 288,
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 10
  },
  imageRow: {
    height: 51,
    flexDirection: "row",
    marginLeft: 1
  },
  rect: {
    width: 353,
    height: 55,
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",
    marginTop: 283,
    marginLeft: 1
  },
  discussionForum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 7
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginLeft: 86
  },
  discussionForumRow: {
    height: 44,
    flexDirection: "row",
    flex: 1,
    marginRight: 17,
    marginLeft: 18,
    marginTop: 6
  },
  rect2: {
    width: 353,
    height: 77,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 21
  },
  icon2: {
    fontSize: 40,
    color: "rgba(129,129,129,1)",
    height: 40,
    width: 40,
    marginTop: 12
  },
  solvingRecursion: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18
  },
  solvingRecursionColumn: {
    width: 266,
    marginLeft: 27
  },
  icon2Row: {
    height: 68,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 6
  },
  rect4: {
    width: 353,
    height: 77,
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 35
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 40,
    width: 40,
    marginTop: 12
  },
  whatIsDp: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 20
  },
  loremIpsum1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginLeft: 1
  },
  whatIsDpColumn: {
    width: 267,
    marginLeft: 27
  },
  icon3Row: {
    height: 68,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 5
  },
  materialUnderlineTextbox: {
    height: 43,
    width: 352,
    position: "absolute",
    left: 0,
    top: 0,
    borderWidth: 1,
    borderColor: "#000000"
  },
  materialButtonTransparentHamburger: {
    height: 40,
    width: 49,
    position: "absolute",
    left: 298,
    top: 4
  },
  materialUnderlineTextboxStack: {
    width: 352,
    height: 44,
    marginTop: 26,
    marginLeft: 1
  }
});

export default Untitled;
