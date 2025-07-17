import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, BotaoPerfil } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';



export default function App() {
  const router = useRouter();

  const intencoes = [
    {
      id: 1,
      titulo: 'Pela Saúde',
      descricao: 'Orem pela saúde do meu filho que está passando por essa situação tão difícil, o nome dele é Gabriel.',
    },
    {
      id: 2,
      titulo: 'Pelo Emprego',
      descricao: 'Fernanda92:Rezar pelo meu irmão que está em busca de trabalho.',
    }
  ];
 
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      
            {/* Título */}
            <Text style={styles.title}>Orando</Text>
      <View style={styles.header}>

        
             <View style={styles.profileIcon}>
                <Ionicons name="heart" size={80} color="#ff0000" />
             </View>
       
      </View>
      

      {/* Lista de intenções */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {intencoes.map((item) => (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text style={styles.cardText}>{item.descricao}</Text>
            {/*} <TouchableOpacity style={styles.button} onPress={() => router.navigate('curtir')}>
              <Text style={styles.buttonText}>Orando</Text>
            </TouchableOpacity> */} 
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
    backButton: {
    position: 'absolute',
    top: 70,
    left: 20,
  },
  
  title: {
    fontSize: 28,
    fontWeight: '600',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#00526D',
    borderRadius: 30,
    padding: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#ffffff',
  },
  cardText: {
    fontSize: 18,
    marginBottom: 12,
    color: '#ffffff',
  },
  button: {
    alignSelf: 'center',
  },
  buttonText: {
    color: '#00526D',
    fontSize: 18,
    fontWeight: '600',
  },
  profileIcon: {
    position: 'relative',
    marginBottom: 30,
  },
});
