import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text
} from "react-native";

function Interests(props) {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0,0,0,0)" />
      <View style={styles.bodyStack}>
        <View style={styles.body}>
          <View style={styles.categories}>
            <View style={styles.button2RowColumn}>
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
              <View style={styles.button4Row}>
                <TouchableOpacity style={styles.button4}>
                  <ImageBackground
                    source={require("../assets/images/accessories-accessory-boots-322207.jpg")}
                    resizeMode="cover"
                    style={styles.image3}
                    imageStyle={styles.image3_imageStyle}
                  >
                    <View style={styles.rect83Filler}></View>
                    <View style={styles.rect83}>
                      <Text style={styles.text24}>FASHION</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
                <View style={styles.button4Filler}></View>
                <TouchableOpacity style={styles.button5}>
                  <ImageBackground
                    source={require("../assets/images/cash-cent-child-1246954.jpg")}
                    resizeMode="cover"
                    style={styles.image4}
                    imageStyle={styles.image4_imageStyle}
                  >
                    <View style={styles.rect84Filler}></View>
                    <View style={styles.rect84}>
                      <Text style={styles.text25}>FINANCE</Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.button2RowColumnFiller}></View>
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
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)"
  },
  body: {
    top: 63,
    left: 0,
    position: "absolute",
    right: 0,
    bottom: 0
  },
  categories: {
    backgroundColor: "rgba(255,255,255,1)",
    flex: 1,
    marginTop: 80
  },
  button2: {
    width: 150,
    height: 150,
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
    justifyContent: "center",
    marginBottom: 1
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
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image2: {
    flex: 1
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
    height: 150,
    flexDirection: "row"
  },
  button4: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image3: {
    flex: 1
  },
  image3_imageStyle: {},
  rect83Filler: {
    flex: 1
  },
  rect83: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center",
    marginBottom: 1
  },
  text24: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button4Filler: {
    flex: 1,
    flexDirection: "row"
  },
  button5: {
    width: 150,
    height: 150,
    backgroundColor: "rgba(230, 230, 230,1)",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image4: {
    flex: 1
  },
  image4_imageStyle: {},
  rect84Filler: {
    flex: 1
  },
  rect84: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    marginBottom: 1
  },
  text25: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    marginTop: 7,
    alignSelf: "center"
  },
  button4Row: {
    height: 150,
    flexDirection: "row",
    marginTop: 39
  },
  button2RowColumn: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  button2RowColumnFiller: {
    flex: 1
  },
  button7: {
    width: 150,
    height: 150,
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
    marginBottom: 2
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
    height: 150,
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
    height: 150,
    flexDirection: "row",
    marginBottom: 30,
    marginLeft: 15,
    marginRight: 15
  },
  button8: {
    top: 0,
    left: 16,
    width: 150,
    height: 145,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image33: {
    flex: 1
  },
  image33_imageStyle: {},
  rect87Filler: {
    flex: 1
  },
  rect87: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text28: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  button9: {
    top: 0,
    width: 154,
    height: 145,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    right: 14,
    elevation: 18,
    borderRadius: 5,
    overflow: "hidden"
  },
  image34: {
    flex: 1
  },
  image34_imageStyle: {},
  rect88Filler: {
    flex: 1
  },
  rect88: {
    height: 27,
    backgroundColor: "rgba(21,19,19,0.5)",
    justifyContent: "center"
  },
  text29: {
    color: "rgba(247,252,253,1)",
    fontSize: 14,
    alignSelf: "center"
  },
  bodyStack: {
    flex: 1,
    marginTop: 20
  }
});

export default Interests;
