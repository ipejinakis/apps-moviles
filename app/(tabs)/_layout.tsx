import { Tabs } from 'expo-router';

export default function TabsLayout(){
    return(
        <Tabs initialRouteName="galeria">
            <Tabs.Screen name="galeria" options={{ headerShown: false }}></Tabs.Screen>
        </Tabs>
    );
}