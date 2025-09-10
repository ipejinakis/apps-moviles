import { Tabs } from 'expo-router';

export default function TabsLayout(){
    return(
        <Tabs initialRouteName="contador">
            <Tabs.Screen name="contador" options={{ headerShown: false }}></Tabs.Screen>
            <Tabs.Screen name="tarjetas" options={{ headerShown: false }} ></Tabs.Screen>
            <Tabs.Screen name="perfil" options={{ headerShown: false }} ></Tabs.Screen>
        </Tabs>
    );
}