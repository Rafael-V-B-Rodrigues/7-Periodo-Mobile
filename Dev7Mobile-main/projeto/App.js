import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaViewProvider, SafeAreaView } from 'react-native-safe-area-content'
import Componente from './components/Componente'
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import Input from './components/TextInput';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState()

  return (
    <SafeAreaViewProvider>
      <SafeAreaView style = {styles.safeArea}>
        <View style={styles.container}>
          <Componente />
          <Greeting nome='Marcelo' />
          <Counter />
          <Input onChange = {setText} />
        </View>
      </SafeAreaView>
    </SafeAreaViewProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: '20',
    backgroundColor: '#c6cfff'
  },
})
