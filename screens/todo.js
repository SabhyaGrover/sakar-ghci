import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';


const Todo = (props) => {

  const todoCheckIcon = props.completed ? 'check-square-o' : 'square-o';
  const todoCheckIconColor = props.completed ? 'green' : '#333';
  const titleStyle = props.completed ? [styles.todoTitle, styles.titleComplete] : [styles.todoTitle];

  return (
    <View style={styles.todoContainer}>
      <FontAwesome
        name={todoCheckIcon}
        size={styles.checkBoxIcon.fontSize}
        color={todoCheckIconColor}
        onPress={e => props.checkBoxToggle(props.index)}
      />
      <Text style={titleStyle}>{props.title}</Text>
      {props.completed && 
        <MaterialIcons 
          style={styles.deleteIcon}
          name={'delete-forever'} 
          size={styles.checkBoxIcon.fontSize}
          color='red'
          onPress={e => props.onDelete(props.index)}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowOffset: { height: 2, width: 0 },
    shadowColor: '#000000',
    shadowOpacity: 0.6,
    elevation: 5,
    position: 'relative'
  },
  checkBoxIcon: {
    fontSize: 22
  },
  todoTitle: {
    fontSize: 18,
    paddingLeft: 15,
    width: '80%'
  },
  titleComplete: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  }
});

export default Todo;