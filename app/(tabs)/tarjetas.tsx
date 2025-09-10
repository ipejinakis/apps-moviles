import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface ScreenProps {
    card: string;
}

function Screen(props: ScreenProps){
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
    <View style={styles.Screen}>
      <Screen card="Card" />
      <Screen card="Card" />
      <Screen card="Card" />
      <Screen card="Card" />

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
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  textPressed:{
    color: 'black',
  },
  textDefault:{
    color: '#EDECE7',
  },
  cardPressed:{
    backgroundColor: '#4B5320', 
    borderColor: '#C2A86B',
  },
  cardDefault:{
    backgroundColor: '#1B2A24', 
    borderColor: '#2E3B35',     
  }
})

 