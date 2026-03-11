import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ActionButton from '../components/ActionButton';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Olá, Samuel 👋</Text>
          <Text style={styles.subtitle}>Bem-vindo de volta</Text>
        </View>

        {/* CARD PRINCIPAL */}
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>Seu Progresso</Text>
          <Text style={styles.cardValue}>75%</Text>
          <Text style={styles.cardDescription}>Continue assim! 🚀</Text>
        </View>

        {/* BOTÕES DE AÇÃO */}
        <View style={styles.actions}>
          <ActionButton
            title="Novo"
            color="#6200EE"
            icon="add-circle"
          
            onPress={() => navigation.navigate("Novo")}
          />

          <ActionButton
            title="Relatórios"
            color="#4CAF50"
            icon="stats-chart"
            onPress={() => navigation.navigate("Relatorios")}
          />
        </View>

      
        <View style={styles.list}>
          <TouchableOpacity style={styles.listItem}>
            <Ionicons name="person-outline" size={22} color="#333" />
            <Text style={styles.listText}>Meu Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem}>
            <Ionicons name="settings-outline" size={22} color="#333" />
            <Text style={styles.listText}>Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listItem} >
            <Ionicons name="log-out-outline" size={22} color="#333" />
            <Text style={styles.listText}>Sair</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
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
    marginBottom: 30,
  },

  greeting: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },

  subtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 4,
  },

  mainCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 25,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },

  cardTitle: {
    color: '#aaa',
    fontSize: 16,
  },

  cardValue: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  cardDescription: {
    color: '#4CAF50',
    fontSize: 14,
  },

  actions: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginBottom: 30,
    gap: 10
  },

  actionButton: {
    flex: 1,
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },

  actionText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  list: {
    backgroundColor: '#1E1E1E',
    borderRadius: 20,
    padding: 10,
  },

  listItem: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#333',
    gap: 10,
  },

  listText: {
    color: '#fff',
    fontSize: 16,
  },
});
