import {
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import React, {useState} from 'react';
import { Component } from 'react';
import {firebase} from '../screens/config';
//setDone(true);
const ToDoItem = ({todoItem: {todoItems, done}, id}) => {
  //const [doneState, setDone] = useState(false)
  const [doneState, setDone] = useState(done);
  const onCheck = () => {

    setDone(!doneState);
   // console.log(done);
    firebase.database()
    .ref('/todos').update({
      [id]: {
        todoItems: todoItems,
        done: !doneState,
      },
    });
  };
  return (
    <View style={styles.todoItem}>
      <CheckBox
        checkBoxColor="#9932CC"
        onClick={onCheck}
        isChecked={doneState}
        disabled={doneState}
      />

      <Text style={[styles.todoText, {opacity: doneState ? 0.2 : 1}]}>
      {todoItems}
      </Text>

    </View>
  );
};




const styles = StyleSheet.create({
    todoItem: {
      flexDirection: 'row',
      marginVertical: 10,
      alignItems: 'center',
  
    },
    todoText: {
      borderColor: '#afafaf',
      paddingHorizontal: 5,
      paddingVertical: 7,
      borderWidth: 1,

      borderRadius: 5,
      color:'#121212',
      marginRight: 10,
      minWidth: "50%",
      textAlign: "center"
    },
  });

  export default ToDoItem