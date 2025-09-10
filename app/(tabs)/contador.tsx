import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Counter(){
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
          <Text style={styles.text}>{count}</Text>
          <View  style={styles.container2}>  
            <Button style={styles.button} onPress={() => setCount(c => c+1)}>+1</Button>
            <Button style={styles.button} onPress={() => setCount(c => c-1)}>-1</Button>
            <Button style={styles.button} onPress={() => setCount(c => c=0)}>Reset</Button>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1310',
    flex:1, 
    alignItems:'center', 
    justifyContent:'center'
  },
  container2: {
    width: "60%",
    flexDirection: "row",
    justifyContent:'space-around'
  },
  text: {
    fontSize: 52,
    fontWeight: '900',
    letterSpacing: 2,
    color: '#1F2937',              
    backgroundColor: '#4B5320',    
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 12,
    textShadowColor: 'rgba(0,0,0,0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#4B5320',    
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0,0,0,0.25)',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  
});