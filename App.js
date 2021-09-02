import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Developer Goal" style={styles.input} />
        <Button title="ADD"/>
      </View>
      <View>

      </View>
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
  }
});
