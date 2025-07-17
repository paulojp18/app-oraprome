import FontAwesome from '@expo/vector-icons/FontAwesome';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#00526D', // Cor ativa dos ícones
        tabBarStyle: {
          height: 95, // Aumenta a altura da tab bar
          paddingBottom: 10, // Espaço interno inferior
          paddingTop: 10, // Espaço interno superior
          
        },
      }}
    >
      <Tabs.Screen 
        name="criar"
        options={{
          title: "Criar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="pen" size={24} color={color} />
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
    
      <Tabs.Screen
        name="curtir"
        options={{
          title: "Orando",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="people" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
