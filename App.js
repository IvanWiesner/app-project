import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    // view = div
    <View style={{padding: 50}}>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"}}>
        <TextInput 
        placeholder="Course goal" 
        style={{
          width: '80%',
          borderBottomColor: "black",
          borderWidth: 1,
          padding: 10}}/>
        <Button title="ADD"/>
      </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
