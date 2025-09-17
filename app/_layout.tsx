import { Stack } from 'expo-router';
import { createContext } from 'react';


export type NameContextValue = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};


export const NameContext = createContext<NameContextValue | undefined>(undefined);

export default function RootLayout() {
  
  return (    
    <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    
  );
}