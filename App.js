import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])

const goalInputHandler = (enteredText) => {
  setEnteredGoal(enteredText);
}

const addGoalHandler = () => {
  setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal}]);
  //currentGoals arrow function is a snapshot of the current state where the spread operator emulates it and then adds enteredGoal
  //an object is being added with the purpose of adding a id per goal with a random number(which later will be extracted and turned into a key with keyExtractor prop), goal should be called by value
}
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
        placeholder="Developer Goal" 
        style={styles.input} 
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={itemData =>(<View style={styles.goalList}><Text>{itemData.item.value}</Text></View>)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center"
},
  input: {
    width: "75%", 
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    padding: 10
  },
  goalList: {
    padding: 8,
    marginVertical: 6,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
