import React, { Component, useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { event } from "react-native-reanimated";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
export default ({onSubmit}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(searchTerm);
  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter')
    {
      onSubmit(searchTerm);
    }
  }
  return (
    <View >
                  <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Search..."
                                placeholderTextColor="grey"
                                style={{ flex: 1}}
                                value = {searchTerm}
                                onChangeText={handleChange}
                                onKeyPress={onKeyPress}

                      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 4
  },
  rect1: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 2,
    flex: 1,
    marginBottom: 20
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  },
  inputStyle: {
    height: 30,
    color: "#000",
    paddingRight: 5,
    fontSize: 16,
    alignSelf: "flex-start",
    width: 110,
    lineHeight: 16,
    marginLeft: 8,
    marginTop: 9
  },
  leftIconButtonRow: {
    height: 48,
    flexDirection: "row",
    marginLeft: -5,
    marginTop: -9
  },
  leftIconButtonRowFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rightIconButton: {
    padding: 11,
    alignItems: "center",
    marginTop: -9
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#000",
    fontSize: 24,
    opacity: 0.6
  }
});

