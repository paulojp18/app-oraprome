import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ícone de voltar e editar (usando Expo)
import { useRouter } from 'expo-router';

const PerfilScreen = () => {
    const router = useRouter();
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('intencoes')}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Perfil</Text>

      {/* Ícone do usuário com lápis */}
      <View style={styles.profileIcon}>
        <Ionicons name="person-circle-outline" size={80} color="#00526D" />
        <View style={styles.editIcon}>
          <Ionicons name="pencil" size={16} color="#00bfffD" />
        </View>
      </View>

      {/* Dados do usuário */}
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome</Text>
        <Text style={styles.info}>Jéssica Viera</Text>

        <Text style={styles.label}>Usuário</Text>
        <Text style={styles.info}>Jessica75</Text>

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.info}>jessica75@gmail.com</Text>

        <Text style={styles.label}>Nascimento</Text>
        <Text style={styles.info}>09/09/1967</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 80,
    left: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  profileIcon: {
    position: 'relative',
    marginBottom: 30,
  },
  editIcon: {
    position: 'absolute',
    bottom: 8,
    right: 0,
    backgroundColor: '#81d1ff',
    borderRadius: 20,
    padding: 4,
  },
  infoContainer: {
    alignSelf: 'stretch',
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 15,
  },
  info: {
    fontSize: 18,
    color: '#00334d',
    fontWeight: '500',
  },
});

export default PerfilScreen;
