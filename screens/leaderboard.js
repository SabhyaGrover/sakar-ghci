import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialButtonGrey from "../components/MaterialButtonGrey";

function Index(props) {
  return (
    <View style={styles.container}>

      <View style={styles.Heading}>
        <Image
          source={require("../assets/images/sakar_logo.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.leaderBoard}>Leaderboard</Text>
      </View>

      <View style={styles.rectRow}>
        <View style={styles.rect}>
          <Text style={styles.rank}>Rank</Text>
        </View>
        <View style={styles.rect}>
          <Text style={styles.rank}>Name</Text>
        </View>
        <View style={styles.rect}>
          <Text style={styles.rank}>Badges</Text>
        </View>
        <View style={styles.rect}>
            <Text style={styles.rank}>Region</Text>
          </View>
      </View>


      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>1.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Mishi</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>India</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>2.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Roop</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>Nigeria</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>3.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Vinesh</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>Algeria</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>4.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Mahi</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>Italy</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>5.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Tanishq</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>India</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>6.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Ellie</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>U.K.</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>7.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Jill</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>India</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>8.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Krishti</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>India</Text>
        </View>
      </View>

      <View style={styles.rectRow}>
          <View style={styles.rect1}>
          <Text style={styles.user}>9.</Text>
          </View>

          <View style={styles.rect1}>
          <Text style={styles.user}>Hitesh</Text>
          </View>

        <View style={styles.rect1}>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
          <EntypoIcon name="star" style={styles.icon}></EntypoIcon>
        </View>
        <View style={styles.rect1}>
          <Text style={styles.user}>India</Text>
        </View>
      </View>

      <MaterialButtonGrey style={{height:'5%',marginTop:30}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'space-evenly',
   alignItems:'center'
  },
  image: {
    marginTop:20,
    width: 146,
    height: 87,
    position: "absolute"
  },
  leaderBoard: {
    marginTop:90,
    color: "#121212",
    fontSize: 25
  },
  Heading: {
    width: 173,
    height: 103,

  },
  rect: {
    width: '20%',
    height: '100%',
    backgroundColor:"#481480",
    borderWidth: 1,
    borderColor:'rgba(211,211,211,1)'
  },
  rank: {
    color: "#DCDCDC",
    marginTop: 4,
    marginLeft: 8
  },
  rect1: {
    width: '20%',
    height: '100%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  name: {
    top: 5,
    left: 7,
    position: "absolute",
    color: "#121212",
    height: 17,
    width: 69
  },
  rect1Stack: {
    width: 76,
    height: 26,
    marginLeft: 11
  },
  rect2: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    marginLeft: 6
  },
  badges: {
    color: "#121212",
    width: 50,
    height: 17,
    marginTop: 6,
    marginLeft: 5
  },
  rect3: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    marginLeft: 9
  },
  region: {
    top: 12,
    left: 9,
    position: "absolute",
    color: "#121212"
  },
  region2: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "#121212",
    width: 44,
    height: 17
  },
  regionStack: {
    width: 64,
    height: 17,
    marginTop: 4,
    marginLeft: 3
  },
  rectRow: {
    height: 26,
    flexDirection: "row",
    justifyContent:'space-around',
    alignContent:'space-around',
    marginTop: 26,
  },
  rect4: {
    width: 75,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 4
  },
  user: {
    color: "#121212",
    fontSize: 19,
    marginTop: 4,
    marginLeft: 7,
    justifyContent:'center'
  },
  rect5: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 4
  },
  mishi: {
    color: "#121212",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 7
  },
  rect6: {
    top: 4,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon: {
    position: "absolute",
    color: "rgba(227,213,26,1)",
    fontSize: 29,
    height: 35,
    width: 29
  },
  icon1: {
    top: 0,
    left: 23,
    position: "absolute",
    color: "rgba(227,213,26,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect6Stack: {
    width: 68,
    height: 36,
    marginLeft: 14
  },
  rect7: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 4
  },
  india: {
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
    marginLeft: 7
  },
  rect4Row: {
    height: 36,
    flexDirection: "row",
    marginTop: 8,
    marginLeft: 2
  },
  rect12: {
    width: 75,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 7
  },
  loremIpsum4: {
    color: "#121212",
    width: 16,
    height: 23,
    fontSize: 19,
    marginTop: 3,
    marginLeft: 5
  },
  rect9: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 9
  },
  roop: {
    color: "#121212",
    fontSize: 15,
    marginTop: 5,
    marginLeft: 7
  },
  rect10: {
    top: 7,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon2: {
    top: 0,
    left: 17,
    position: "absolute",
    color: "rgba(227,213,26,1)",
    fontSize: 32
  },
  rect10Stack: {
    width: 68,
    height: 35,
    marginLeft: 14
  },
  rect11: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 9
  },
  nilgeria: {
    color: "#121212",
    fontSize: 15,
    marginTop: 2,
    marginLeft: 7
  },
  rect12Row: {
    height: 35,
    flexDirection: "row",
    marginLeft: 2
  },
  rect13: {
    top: 0,
    left: 0,
    width: 75,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  loremIpsum5: {
    top: 4,
    left: 8,
    position: "absolute",
    color: "#121212",
    fontSize: 19,
    width: 123,
    height: 23
  },
  rect13Stack: {
    top: 0,
    left: 0,
    width: 131,
    height: 27,
    position: "absolute"
  },
  rect14: {
    top: 0,
    left: 86,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  vinesh: {
    color: "#121212",
    fontSize: 15,
    marginTop: 8,
    marginLeft: 6
  },
  rect13StackStack: {
    width: 154,
    height: 27,
    marginTop: 4
  },
  rect15: {
    top: 4,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon3: {
    top: 0,
    left: 2,
    position: "absolute",
    color: "rgba(155,155,155,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  icon4: {
    top: 0,
    left: 27,
    position: "absolute",
    color: "rgba(155,155,155,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect15Stack: {
    width: 68,
    height: 35,
    marginLeft: 14
  },
  rect16: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 4
  },
  algeria: {
    color: "#121212",
    fontSize: 15,
    marginTop: 3,
    marginLeft: 7
  },
  rect13StackStackRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 2
  },
  rect17: {
    top: 0,
    left: 0,
    width: 75,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  loremIpsum6: {
    top: 3,
    left: 8,
    position: "absolute",
    color: "#121212",
    fontSize: 19
  },
  rect17Stack: {
    width: 75,
    height: 27,
    marginTop: 4
  },
  rect18: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 4
  },
  mahi: {
    color: "#121212",
    fontSize: 15,
    marginTop: 3,
    marginLeft: 7
  },
  rect19: {
    top: 4,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon5: {
    top: 0,
    left: 17,
    position: "absolute",
    color: "rgba(155,155,155,1)",
    fontSize: 32
  },
  rect19Stack: {
    width: 68,
    height: 35,
    marginLeft: 14
  },
  rect20: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 4
  },
  italy: {
    color: "#121212",
    fontSize: 15,
    marginTop: 7,
    marginLeft: 8
  },
  rect17StackRow: {
    height: 35,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 2
  },
  rect21: {
    width: 75,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 6
  },
  loremIpsum7: {
    color: "#121212",
    fontSize: 19,
    marginTop: 4,
    marginLeft: 9
  },
  rect22: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 6
  },
  tanishq: {
    color: "#121212",
    fontSize: 15,
    marginTop: 2,
    marginLeft: 7
  },
  rect23: {
    top: 6,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon6: {
    top: 0,
    left: 17,
    position: "absolute",
    color: "rgba(155,155,155,1)",
    fontSize: 32
  },
  rect23Stack: {
    width: 68,
    height: 35,
    marginLeft: 14
  },
  rect24: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 6
  },
  india2: {
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
    marginLeft: 7
  },
  rect21Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 2
  },
  rect25: {
    width: 75,
    height: 27,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 6
  },
  loremIpsum8: {
    color: "#121212",
    fontSize: 19,
    marginTop: 4,
    marginLeft: 10
  },
  rect26: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 7
  },
  elle: {
    color: "#121212",
    width: 25,
    height: 17,
    marginTop: 3,
    marginLeft: 6
  },
  rect27: {
    top: 7,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon7: {
    top: 2,
    left: 3,
    position: "absolute",
    color: "rgba(213,137,71,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  icon8: {
    top: 0,
    left: 30,
    position: "absolute",
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect27Stack: {
    width: 68,
    height: 37,
    marginLeft: 14
  },
  rect28: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 7
  },
  uk: {
    color: "#121212",
    fontSize: 15,
    marginTop: 7,
    marginLeft: 7
  },
  rect25Row: {
    height: 37,
    flexDirection: "row",
    marginLeft: 2
  },
  rect29: {
    width: 75,
    height: 29,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 5
  },
  loremIpsum9: {
    color: "#121212",
    fontSize: 19,
    marginTop: 4,
    marginLeft: 12
  },
  rect30: {
    width: 68,
    height: 29,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 5
  },
  jill: {
    color: "#121212",
    fontSize: 15,
    marginTop: 3,
    marginLeft: 7
  },
  rect31: {
    top: 5,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon9: {
    top: 0,
    left: 20,
    position: "absolute",
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect31Stack: {
    width: 68,
    height: 35,
    marginLeft: 14
  },
  rect32: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 5
  },
  india3: {
    color: "#121212",
    fontSize: 15,
    marginTop: 7,
    marginLeft: 7
  },
  rect29Row: {
    height: 35,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 2
  },
  rect40: {
    width: 75,
    height: 27,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  loremIpsum11: {
    color: "#121212",
    fontSize: 19,
    marginTop: 1,
    marginLeft: 14
  },
  rect36: {
    width: 75,
    height: 29,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 12
  },
  loremIpsum12: {
    color: "#121212",
    fontSize: 19,
    marginTop: 1,
    marginLeft: 11
  },
  rect40Column: {
    width: 75,
    marginTop: 4,
    marginBottom: 20
  },
  rect33: {
    top: 35,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  greece: {
    color: "#121212",
    width: 49,
    height: 17,
    fontSize: 15,
    marginTop: 7,
    marginLeft: 10
  },
  egypt: {
    top: 0,
    left: 9,
    position: "absolute",
    color: "#121212",
    fontSize: 15,
    width: 47,
    height: 36
  },
  rect33Stack: {
    top: 3,
    left: 0,
    width: 68,
    height: 61,
    position: "absolute"
  },
  rect37: {
    top: 0,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  rect33StackStack: {
    top: 0,
    left: 124,
    width: 68,
    height: 64,
    position: "absolute"
  },
  rect34: {
    top: 3,
    left: -1,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon12: {
    top: 0,
    left: 22,
    position: "absolute",
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect34Stack: {
    top: 0,
    left: 0,
    width: 68,
    height: 35,
    position: "absolute"
  },
  materialButtonGrey: {
    height: 18,
    width: 92,
    position: "absolute",
    left: 52,
    top: 34
  },
  rect34StackStack: {
    top: 35,
    left: 47,
    width: 144,
    height: 52,
    position: "absolute"
  },
  rect47: {
    top: 71,
    left: 0,
    width: 49,
    height: 16,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 12,
    marginTop: 1,
    marginLeft: 1
  },
  rect33StackStackStack: {
    top: 5,
    left: 35,
    width: 192,
    height: 87,
    position: "absolute"
  },
  rect35: {
    top: 43,
    left: 0,
    width: 68,
    height: 29,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  parag: {
    color: "#121212",
    fontSize: 15,
    marginTop: 3,
    marginLeft: 8
  },
  rect38: {
    top: 5,
    left: -1,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon11: {
    top: 0,
    left: 22,
    position: "absolute",
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect38Stack: {
    top: 0,
    left: 82,
    width: 68,
    height: 35,
    position: "absolute"
  },
  rect39: {
    top: 5,
    left: 0,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  hitesh: {
    color: "#121212",
    fontSize: 15,
    marginTop: 4,
    marginLeft: 8
  },
  rect33StackStackStackStack: {
    width: 227,
    height: 92,
    marginLeft: 11
  },
  rect40ColumnRow: {
    height: 92,
    flexDirection: "row",
    marginTop: 40,
    marginRight: 2
  },
  rect44: {
    width: 75,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginTop: 4
  },
  loremIpsum10: {
    color: "#121212",
    fontSize: 19,
    marginTop: 4,
    marginLeft: 12
  },
  rect43: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 11,
    marginTop: 4
  },
  kristi: {
    color: "#121212",
    fontSize: 15,
    height: 18,
    width: 33,
    marginTop: 3,
    marginLeft: 8
  },
  rect42: {
    top: 4,
    left: -1,
    width: 68,
    height: 26,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)"
  },
  icon10: {
    top: 0,
    left: 22,
    position: "absolute",
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32
  },
  rect42Stack: {
    width: 68,
    height: 35,
    marginLeft: 14
  },
  rect41: {
    width: 68,
    height: 26,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(155,155,155,1)",
    marginLeft: 9,
    marginTop: 4
  },
  india4: {
    color: "#121212",
    fontSize: 15,
    marginTop: 6,
    marginLeft: 10
  },
  rect44Row: {
    height: 35,
    flexDirection: "row",
    marginTop: -127,
    marginRight: 2
  },
  rect45: {
    width: 312,
    height: 37,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    flexDirection: "row",
    marginTop: 123
  },
  loremIpsum14: {
    color: "#121212",
    marginTop: 10
  },
  icon13: {
    color: "rgba(215,138,72,1)",
    fontSize: 32,
    height: 35,
    width: 32,
    marginLeft: 72
  },
  india5: {
    color: "#121212",
    marginLeft: 41,
    marginTop: 10
  },
  loremIpsum14Row: {
    height: 35,
    flexDirection: "row",
    flex: 1,
    marginRight: 18,
    marginLeft: 14,
    marginTop: 2
  },
  rect46: {
    width: 314,
    height: 25,
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(74,74,74,1)",
    marginTop: -62
  },
  loremIpsum13: {
    color: "#121212",
    marginTop: 7,
    marginLeft: 12
  }
});

export default Index;
