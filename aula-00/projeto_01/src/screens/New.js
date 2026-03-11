import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function NovoScreen({ navigation }) {

  const [titulo, setTitulo] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    if (!titulo || !valor) {
      Alert.alert("Erro", "Preencha pelo menos título e valor!");
      return;
    }

    Alert.alert(
      "Salvo com sucesso 🚀",
      `Título: ${titulo}\nValor: R$ ${valor}`
    );

    // limpa campos
    setTitulo('');
    setValor('');
    setDescricao('');
  };

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Novo Registro</Text>
      </View>

      {/* INPUT TÍTULO */}
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o título"
        placeholderTextColor="#777"
        value={titulo}
        onChangeText={setTitulo}
      />

      {/* INPUT VALOR */}
      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        placeholderTextColor="#777"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      {/* INPUT DESCRIÇÃO */}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Descrição opcional"
        placeholderTextColor="#777"
        multiline
        value={descricao}
        onChangeText={setDescricao}
      />

      {/* BOTÃO SALVAR */}
      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 100,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  label: {
    color: '#aaa',
    marginBottom: 5,
    marginTop: 15,
  },

  input: {
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 15,
    color: '#fff',
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
