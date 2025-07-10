import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';




export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{headerShown: false}}>
      <Tabs.Screen 

        name="index"
        options={{
          title: "Criar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus" color={color} size={size} />
          ),
        }}
      />
    
      <Tabs.Screen
        name="curtir"
        options={{
          title: "Intenções",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
        }}
      />
        <Tabs.Screen
        name="intencoes"
        options={{
          title: "Intenções",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="book" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}