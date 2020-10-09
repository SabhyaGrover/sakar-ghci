import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  Text,
  FlatList,
  TextInput
} from "react-native";
import InterestChip from '../components/InterestChip';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import { firebase } from './config';
function Interests({route}) {
  const [ entityText,setEntityText ] = useState('')
  const [entities, setEntities] = useState([])
  //const entityRef = firebase.database().ref('interests').on
  const {userData} = route.params.params
  const userID = userData.id
  console.log({userData})
  console.log(userID)
  //console.log(entityRef);
  useEffect(() => {
    firebase.database()
    .ref('interests')
    .on('value',(snapshot) => {
      const rec = snapshot.val()
      console.log(rec);
    })
      error => {
        console.log(error)
      }
  },[])
  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
            text: entityText,
            authorID: userID,
            createdAt: timestamp,
        };
        entityRef
            .add(data)
            .then(_doc => {
                setEntityText('')
                Keyboard.dismiss()
            })
            .catch((error) => {
                alert(error)
            });
    }
}

const renderEntity = ({item, index}) => {
  return (
      <View style={styles.entityContainer}>
          <Text style={styles.entityText}>
              {index}. {item.text}
          </Text>
      </View>
  )
}

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new entity'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEntityText(text)}
                    value={entityText}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
          {entities && (
      <View style={styles.listContainer}>
      <FlatList data={entities}
        renderItem={renderEntity}
        keyExtractor={(item) => item.id}
        removeClippedSubviews={true}
        />
        </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
},
formContainer: {
    flexDirection: 'row',
    height: 80,
    marginTop: 40,
    marginBottom: 20,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center'
},
input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
},
button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: '#788eec',
    width: 80,
    alignItems: "center",
    justifyContent: 'center'
},
buttonText: {
    color: 'white',
    fontSize: 16
},
listContainer: {
    marginTop: 20,
    padding: 20,
},
entityContainer: {
    marginTop: 16,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    paddingBottom: 16
},
entityText: {
    fontSize: 20,
    color: '#333333'
}
})

export default Interests;