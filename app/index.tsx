import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface HomeScreenProps {
    card: string;
}

function HomeScreen(props: HomeScreenProps){
  const [pressed, setPressed] = useState(false);
  return (
    <Pressable 
      onPress={() => setPressed(!pressed)}
      style={[
        styles.card,
        pressed ? styles.cardPressed : styles.cardDefault,
    ]}
    >
      <Text style={[styles.text, pressed ? styles.textPressed : styles.textDefault]}>
        {props.card}
      </Text>
    </Pressable>
  );
}

export default function Cards() {
  return (
    <View style={styles.homeScreen}>
      <HomeScreen card="Card" />
      <HomeScreen card="Card" />
      <HomeScreen card="Card" />
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen:{
    flex: 1,                 
    justifyContent: 'center',
    alignItems: 'center',    
    gap: 12,  
  },
  card: {
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      height: 120,
      width: '80%',
      borderRadius:25,
      borderWidth: 3,
      borderColor: '#f7f5f0',
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.3,
      shadowRadius: 6,
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold' 
  },
  textPressed:{
    color: '#f7f5f0',
  },
  textDefault:{
    color: '#4B5320',
  },
  cardPressed:{
    backgroundColor: '#4B5320',
  },
  cardDefault:{
    backgroundColor: '#f7f5f0',
  }
})

 