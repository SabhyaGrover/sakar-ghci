import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import MaterialSearchBar1 from "../components/MaterialSearchBar1";


function Channels1(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.body}>
        <View style={styles.categories}>
          <View style={styles.materialSearchBar1Column}>
            <MaterialSearchBar1
              style={styles.materialSearchBar1}
            ></MaterialSearchBar1>
            <Text style={styles.recommendation}>Recommendation</Text>
            <View style={styles.button2Row}>
              <TouchableOpacity style={styles.button2}>
                <ImageBackground
                  source={require("../assets/images/astronaut-astronomy-cosmos-2156.jpg")}
                  resizeMode="cover"
                  style={styles.image}
                  imageStyle={styles.image_imageStyle}
                >
                  <View style={styles.rect8Filler}></View>
                  <View style={styles.rect8}>
                    <Text style={styles.text22}>SCIENCE</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
              <View style={styles.button2Filler}></View>
              <TouchableOpacity style={styles.button3}>
                <ImageBackground
                  source={require("../assets/images/chips-circuit-circuit-board-343457.jpg")}
                  resizeMode="cover"
                  style={styles.image2}
                  imageStyle={styles.image2_imageStyle}
                >
                  <View style={styles.rect82Filler}></View>
                  <View style={styles.rect82}>
                    <Text style={styles.text23}>TECHNOLOGY</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
            <Text style={styles.featured}>Featured</Text>
          </View>
          <View style={styles.materialSearchBar1ColumnFiller}></View>
          <View style={styles.button7Row}>
            <TouchableOpacity style={styles.button7}>
              <ImageBackground
                source={require("../assets/images/conifers-daylight-environment-1666021.jpg")}
                resizeMode="cover"
                style={styles.image22}
                imageStyle={styles.image22_imageStyle}
              >
                <View style={styles.rect85Filler}></View>
                <View style={styles.rect85}>
                  <Text style={styles.text26}>ENVIRONMENT</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <View style={styles.button7Filler}></View>
            <TouchableOpacity style={styles.button6}>
              <ImageBackground
                source={require("../assets/images/architecture-audi-automotive-1545743.jpg")}
                resizeMode="cover"
                style={styles.image32}
                imageStyle={styles.image32_imageStyle}
              >
                <View style={styles.rect86Filler}></View>
                <View style={styles.rect86}>
                  <Text style={styles.text27}>AUTO</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  body: {
    width: 360,
    height: 809,
    marginTop: -69,
    alignSelf: "center"
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    width: 360,
    flex: 1,
    marginTop: 80,
    alignSelf: "center"
  },
  materialSearchBar1: {
    height: 59,
    width: 327
  },
  recommendation: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 15
  },
  button2: {
    width: 150,
    height: 189,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image: {
    flex: 1
  },
  image_imageStyle: {},
  rect8Filler: {
    flex: 1
  },
  rect8: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text22: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button2Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button3: {
    width: 150,
    height: 189,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image2: {
    height: 189,
    width: 150
  },
  image2_imageStyle: {},
  rect82Filler: {
    flex: 1
  },
  rect82: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text23: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button2Row: {
    height: 189,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 2
  },
  featured: {
    fontFamily: "open-sans-regular",
    color: "#121212",
    fontSize: 24,
    marginTop: 37,
    marginLeft: 8
  },
  materialSearchBar1Column: {
    marginTop: 33,
    marginLeft: 13,
    marginRight: 15
  },
  materialSearchBar1ColumnFiller: {
    flex: 1
  },
  button7: {
    width: 150,
    height: 189,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  image22: {
    flex: 1,
    marginBottom: -1,
    marginTop: 1
  },
  image22_imageStyle: {},
  rect85Filler: {
    flex: 1
  },
  rect85: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    marginBottom: 1
  },
  text26: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 7,
    alignSelf: "center"
  },
  button7Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button6: {
    width: 150,
    height: 189,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-end"
  },
  image32: {
    flex: 1,
    marginBottom: -1,
    marginTop: 1
  },
  image32_imageStyle: {},
  rect86Filler: {
    flex: 1
  },
  rect86: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    marginBottom: 1
  },
  text27: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 6,
    alignSelf: "center"
  },
  button7Row: {
    height: 189,
    flexDirection: "row",
    marginBottom: 111,
    marginLeft: 15,
    marginRight: 15
  }
});

export default Channels1;