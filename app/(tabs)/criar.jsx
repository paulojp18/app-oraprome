import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,ScrollView} from 'react-native';
import { useRouter } from 'expo-router';
import RadioGroup from 'react-native-radio-buttons-group';
import { Feather,  Ionicons} from '@expo/vector-icons';

export default function CriarIntencaoScreen() {
  const router = useRouter();
  
  const [nomeOpcao, setNomeOpcao] = useState([
    { id: '1', label: 'Sim', value: 'sim', selected: true },
    { id: '2', label: 'Não', value: 'nao' }
  ]);
  const [assunto, setAssunto] = useState('');
  const [intencao, setIntencao] = useState('');

  const handleCriar = () => {
    const nomeSelecionado = nomeOpcao.find(item => item.selected)?.value;
    console.log({ nomeSelecionado, assunto, intencao });
    // Aqui pode enviar para um backend ou salvar no estado global
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Feather name="edit-2" size={28} color="#00526D" />
        <Text style={styles.headerText}>Criar</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => router.navigate('intencoes')}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
       
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Deseja colocar seu nome?</Text>
        <RadioGroup
          radioButtons={nomeOpcao}
          onPress={setNomeOpcao}
          layout="row"
        />

        <Text style={styles.label}>De que assunto é sua intenção?</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: Saúde, emprego..."
          value={assunto}
          onChangeText={setAssunto}
        />

        <Text style={styles.label}>Digite sua intenção:</Text>
        <TextInput
          style={styles.textarea}
          multiline
          placeholder="Rezo por..."
          value={intencao}
          onChangeText={setIntencao}
        />

        <TouchableOpacity style={styles.button} onPress={() => router.navigate('intencoes')}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
  },
  form: {
    backgroundColor: '#3191AF',
    padding: 20,
    borderRadius: 12,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
  },
  textarea: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 10,
    fontSize: 14,
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#003544',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
