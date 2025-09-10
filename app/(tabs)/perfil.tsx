import { router } from 'expo-router';
import { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NameContext } from '../_layout';

export default function Perfil() {
    const ctx = useContext(NameContext);
    if (!ctx) throw new Error('Perfil fuera de <NameContext.Provider>');
    const { fullName } = ctx;
    return (
        <View style= {styles.container}>
            <Text style= {styles.text}>{fullName}</Text>
            <Button title="Cambiar Nombre" onPress={() => router.push('/change-name')} />
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
  text: {
    fontSize: 30,
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
});
