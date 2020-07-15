import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from './Card';
import Colors from '../contants/Colors' ;

const TodoItem = props => {
  return (
    <Card>
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
        </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,

  }
});

export default TodoItem;
