import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
  import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
const Cadastro = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Cadastro</Text>

        <Text style={styles.label}>Nome Completo</Text>
        <TextInput style={styles.input} placeholder="Inserir nome e sobrenome" placeholderTextColor="#555" />

        <Text style={styles.label}>Usuário</Text>
        <TextInput style={styles.input} placeholder="Inserir nome de usuario" placeholderTextColor="#555" />

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput style={styles.input} placeholder="Inserir E-mail" placeholderTextColor="#555" />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} placeholder="Inserir Data" placeholderTextColor="#555" />

        <Text style={styles.label}>SENH</Text>
        <TextInput style={styles.input} placeholder="Inserir senha" placeholderTextColor="#555" secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cadastro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007D99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 26,
    fontWeight: '300',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    marginTop: 10,
    color: '#555',
  },
  input: {
    backgroundColor: '#e1f5fe',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: '#004D61',
    padding: 12,
    borderRadius: 6,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
