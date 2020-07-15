import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from './components/Header';
import AddNote from './components/AddNote';
import TodoList from './components/TodoList';
import Card from './components/Card';


export default function App() {

  const [modalVisibility, setModalVisibility] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const ModalVisibilityToggler = () =>{
    setModalVisibility(true);
  }

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setModalVisibility(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setModalVisibility(false);
  };

  return (
    
    <View style={styles.container}>
      <Header  ModalVisibilityToggler={ModalVisibilityToggler}/>
      <AddNote 
        modalVisibility={modalVisibility}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler} />
    
  
      <FlatList styles={styles.FlatList}
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => (
        <TodoList
          id={itemData.item.id}
          onDelete={removeGoalHandler}
          title={itemData.item.value}
        />
      )}
      />

  </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  FlatList:{
    width: 300,
    flexDirection: 'row',

  }
});
