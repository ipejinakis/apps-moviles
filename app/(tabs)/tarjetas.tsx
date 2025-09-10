import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from "../../components/card";

export default function Cards() {
  return (
    <View style={styles.Screen}>
        <Card card="Card" />
        <Card card="Card" />
        <Card card="Card" />
        <Card card="Card" />
    </View>
  );
}

const styles = StyleSheet.create({
  Screen:{
    backgroundColor: '#0F1310',
    flex: 1,                 
    justifyContent: 'center',
    alignItems: 'center',    
    gap: 12,  
  }
})

 