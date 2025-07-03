import { StyleSheet, Text, View, TouchableOpacity, C} from 'react-native'
import { useRouter } from 'expo-router';
import React from 'react'

const Cadastro = () => { 
          const router = useRouter();
    return (
    <View>
      <Text>cadastro</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.navigate('/')}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
    
    </View>
    
  )
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

export default Cadastro

