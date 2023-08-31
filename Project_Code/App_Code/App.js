import { useState } from 'react';
import { View, ScrollView, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native'; 
import { StatusBar } from 'expo-status-bar';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container1}>
      <Text> HELLO FRIENDS </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#7de',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function MyButton(props){
  return (
    <TouchableOpacity onPress={props.onPress}> 
    
      <Text>AAAAAA</Text>
    </TouchableOpacity>
  );
}