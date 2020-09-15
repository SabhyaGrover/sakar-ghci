import React, { Component } from "react";
import { StyleSheet, View} from "react-native";
import Slider from '@react-native-community/slider';

function MaterialSlider1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <Slider value={50} style={styles.slider}></Slider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  slider: {
    height: 30,
    width: 150
  }
});

export default MaterialSlider1;
