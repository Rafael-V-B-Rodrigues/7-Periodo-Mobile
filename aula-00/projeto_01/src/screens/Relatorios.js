import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function Relatorios({ navigation }) {
  const [relatorios, setRelatorios] = useState([
    { id: '1', titulo: 'Relatório Mensal', data: 'Jan 2026' },
    { id: '2', titulo: 'Relatório Semanal', data: 'Semana 02' },
    { id: '3', titulo: 'Relatório Diário', data: '11 Fev 2026' },
  ]);

  const atualizarRelatorios = () => {
    Alert.alert("Atualizado!", "Os relatórios foram atualizados com sucesso 🚀");
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Ionicons name="document-text-outline" size={22} color="#6200EE" />
      <View style={{ marginLeft: 10 }}>
        <Text style={styles.itemTitle}>{item.titulo}</Text>
        <Text style={styles.itemDate}>{item.data}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Relatórios</Text>
      </View>

      {/* CARD RESUMO */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Resumo Geral</Text>
        <Text style={styles.cardValue}>R$ 12.450</Text>
        <Text style={styles.cardSubtitle}>Total acumulado</Text>
      </View>

      {/* LISTA */}
      <FlatList
        data={relatorios}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* BOTÃO ATUALIZAR */}
      <TouchableOpacity style={styles.button} onPress={atualizarRelatorios}>
        <Ionicons name="refresh" size={20} color="#fff" />
        <Text style={styles.buttonText}>Atualizar</Text>
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
    marginBottom: 25,
  },

  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 15,
  },

  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
  },

  cardTitle: {
    color: '#aaa',
    fontSize: 16,
  },

  cardValue: {
    color: '#4CAF50',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },

  cardSubtitle: {
    color: '#aaa',
    fontSize: 14,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 15,
    borderRadius: 15,
    marginBottom: 12,
  },

  itemTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  itemDate: {
    color: '#aaa',
    fontSize: 13,
  },

  button: {
    flexDirection: 'row',
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100,
    gap: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
