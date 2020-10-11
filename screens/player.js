import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { WebView } from 'react-native-webview';
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialUnderlineTextbox from "../components/MaterialUnderlineTextbox";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";

export default function player({route}){
const {videoId} = route.params.params
const {description} = route.params.params
const {title } = route.params.params
//console.log(route.params.params)
  return (
    <View style={styles.container}>
      <View style={styles.group}>
      <WebView source ={{ uri:`https://www.youtube.com/embed/${videoId}`}}
        startInLoadingState
        javaScriptEnabled
        style={{flex:1}} />
         <View style={{justifyContent:'center',marginTop:7}}>
          <View style={{backgroundColor:'#481480'}}>

            <View style={styles.column}>
              <Text style={{color:'#DCDCDC',fontWeight:'bold',fontSize:25}}>{title}</Text>
            </View>
          </View>
          <Text style={{color:'#121212',marginLeft:10,marginRight:10,marginTop:20,alignItems:'flex-end',fontSize:15}}>{description}</Text>
        </View>


          <View style={styles.discussionForumRow}>
          <Text style={styles.discussionForum}>Discussion Forum<EntypoIcon
              name="chevron-small-down"
              style={styles.icon}
            /></Text>

<View style={styles.rect2}>
          <View style={styles.icon2Row}>
          <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon2}
            />
            <View style={styles.column}>
              <Text style={styles.comments}>Debugging Errors          </Text>
              <Text style={styles.loremIpsum}>
                -Object is undefined{"\n"}-Invalid Syntax
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.rect2}>
          <View style={styles.icon2Row}>
            <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon2}
            ></FontAwesomeIcon>
            <View style={styles.column}>
              <Text style={styles.comments}>Concepts and Doubts</Text>
              <Text style={styles.loremIpsum}>
                -AMAs{"\n"}-FAQ
              </Text>
            </View>

          </View>
        </View>

        <View style={styles.rect2}>
          <View style={styles.icon2Row}>
          <FontAwesomeIcon
              name="user-circle-o"
              style={styles.icon2}
            />
            <View style={styles.column}>
              <Text style={styles.comments}>Learning Resources</Text>
              <Text style={styles.loremIpsum}>
                -Medium Articles{"\n"}-dev.io articles
              </Text>
            </View>
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
    width: '100%',
    height: '100%',
    marginTop: 53,
    justifyContent:'center'

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
    
    borderWidth: 1,
    borderColor: "#000000",
    flexDirection: "row",

  },
  discussionForum: {
    color: "#121212",
    fontSize: 24,
    marginTop: 20,
    marginBottom:7,

  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 20,
    height: 40,
    width: 40,
    marginLeft: 86
  },
  discussionForumRow: {
    height: 44,
    flex:1,
    flexDirection: "column",
    justifyContent:'flex-start',
    alignItems:'center',
    alignContent:'center',
    marginTop: 6
  },
  rect2: {
    width: 353,
    height: 77,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center',
    alignSelf:'center',
    borderWidth: 1,
    borderColor: "#000000",

  },
  icon2: {
    fontSize: 40,
    color: "rgba(129,129,129,1)",
    height: 40,
    width: 40,
    marginTop: 12
  },
  youtube: {
    alignSelf: 'stretch',
    height: 300
    },
  comments: {
    color: "#121212",
    fontSize: 20
  },
  loremIpsum: {
    color: "#121212",
    fontSize: 15,
    alignItems:'center',
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    justifyContent:"center"
  },
  column: {
    justifyContent:"center",
    alignItems:'stretch',
    marginLeft:7
  },
  icon2Row: {
    height: 48,
    flexDirection: "row",

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
    color: "#121212",
    fontSize: 20
  },
  loremIpsum1: {
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
