import ToDoItem from '../components/ToDoItem';

import React, {Component} from 'react';
import {
  StyleSheet,
  Alert,
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
} from 'react-native';
import { firebase } from './config';

export default class todoo extends React.Component {

      state = {
        todos: [],
        presentToDo: '',
      };

    async componentDidMount() {
      
      firebase.database()
      .ref('/todos').on('value', querySnapShot => {
            let data = querySnapShot.val() ? querySnapShot.val() : {};
            let todoItem = {...data};
            this.setState({
              todos: todoItem,
            });
          });

      //console.log(this.state.todos);
    }

    addNewTodo = () => {
        firebase.database()
        .ref('/todos').push({
            done: false,
            todoItem: this.state.presentToDo,
          });
          Alert.alert('Action!', 'A new To-do item was created');
          this.setState({
            presentToDo: '',
          });
          //console.log(this.state.presentToDo)
    }

    clearTodos=() => {
        firebase.database()
        .ref('/todos').remove();

    }
    render() {
        let todosKeys = Object.keys(this.state.todos);
      return (
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}>
          
          <View>
  {todosKeys.length > 0 ? (
    todosKeys.map(key => (
      <ToDoItem
        key={key}
        id={key}
        todoItem={this.state.todos[key]}
      />
    ))
  ) : (
        <Text>No todo item</Text>
  )}
</View>
          <TextInput
            placeholder="Add new Todo"
            style={styles.textInput}
            onChangeText={presentToDo => {
              this.setState({presentToDo })
            }}
            value={this.state.presentToDo}
          />

          <Button
            title="Add new To do item"
            onPress={this.addNewTodo}
            color="#9932CC"
          />
          <View style={{marginTop: 20}}>
            <Button title="Clear todos" onPress={this.clearTodos} color="#8B008B" />
          </View>
        </ScrollView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      marginTop:100
    },
    contentContainerStyle: {
      alignItems: 'center',
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#afafaf',
      width: '80%',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 20,
      fontSize: 20,
    },
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
      marginRight: 10,
      minWidth: '50%',
      textAlign: 'center',
    },
  });