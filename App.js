import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
// ScrollView - loads everything (slow)
// FlatList - loads jut whats displayed (fast)
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]); 

  const addGoalHandler = goalTitle => {
    // previous state into the new state
    // there is no key element so the enteredGoals is jut a string 
    // need to make the key a list or objects
    // then you must value the string
    // now this is an array of objects where each object has a key and vlaue property
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      { id: Math.random().toString(), value: goalTitle }
    ]);
  }
  return (
    // view = div
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
