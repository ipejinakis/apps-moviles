import { router } from 'expo-router';
import { useContext, useState } from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { NameContext } from './_layout';

export default function ChangeName() {
  const ctx = useContext(NameContext);
  if (!ctx) throw new Error('ChangeName fuera de <NameContext.Provider>');
  const { fullName, setFullName } = ctx;

  const [value, setValue] = useState<string>(fullName);

  const guardar = () => {
    const cleaned = value.trim();
    if (!cleaned) {
      Alert.alert('Nombre inválido', 'Escribí al menos un caracter.');
      return;
    }
    setFullName(cleaned); 
    router.back();        
  };

  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Ingresá tu nombre"
        autoCapitalize="words"
        returnKeyType="done"
        onSubmitEditing={guardar}
        style={{ borderWidth: 1, borderRadius: 12, padding: 12 }}
      />
      <Button title="Guardar" onPress={guardar} />
      <Button title="Cancelar" onPress={() => router.back()} />
    </View>
  );
}
