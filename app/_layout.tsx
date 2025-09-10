import { Stack } from 'expo-router';
import { createContext, useState } from 'react';


export type NameContextValue = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};


export const NameContext = createContext<NameContextValue | undefined>(undefined);

export default function RootLayout() {
  const [fullName, setFullName] = useState<string>('Nombre Apellido');

  return (
    <NameContext.Provider value={{ fullName, setFullName }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="change-name"
          options={{ title: 'Cambiar nombre', presentation: 'modal' }}
        />
      </Stack>
    </NameContext.Provider>
  );
}