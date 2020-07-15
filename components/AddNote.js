import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput } from 'react-native';
import Colors from '../contants/Colors';



const AddNote = ({modalVisibility, onAddGoal, onCancel}) =>{
   
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };


    return(
        <Modal visible ={modalVisibility} style={styles.modal} animationType="slide">
            <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter a task"
              style={styles.input}
              onChangeText={goalInputHandler}
              value={enteredGoal}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="CANCEL" color="red" onPress={onCancel} />
              </View>
              <View style={styles.button}>
                <Button title="ADD" onPress={addGoalHandler} />
              </View>
            </View>
          </View>
        </Modal>
    )    

};

const styles = StyleSheet.create({
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      width: '80%',
      borderColor: Colors.secondary,
      borderWidth: 1,
      padding: 10,
      marginBottom: 10
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
    },
    button: {
      width: '40%'
    }
  });

export default AddNote;