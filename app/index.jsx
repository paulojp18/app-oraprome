import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function App() {  
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../assets/orando.png')} // Usaremos essa imagem como fundo depois
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>E-MAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir E-mail"
          placeholderTextColor="#ccc"
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Inserir senha"
          placeholderTextColor="#ccc"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/intencoes')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/cadastro')}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#127C96',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
  width: '85%',
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // Transparente
  borderRadius: 10,
  padding: 20,
  alignItems: 'stretch',

  },

  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#127C96',
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#0A4E5D',
    color: 'white',
    padding: 10,
    borderRadius: 10, // mais arredondado
    marginBottom: 10,
    elevation: 4, // sombra (Android)
    shadowColor: '#000', // sombra (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
},
  forgot: {
    color: '#999',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0A4E5D',
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    alignItems: 'center',

},
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});