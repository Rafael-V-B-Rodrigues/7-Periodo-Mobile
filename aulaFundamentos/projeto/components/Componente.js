import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Componente() {
  return (
    <View >
      <TextInput style={styles.text}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
   
    borderStyle: 'solid',
    backgroundColor: '#452026',
    fontSize: 20,
    textAlign:'center',
    margin: 10,
    color: '#995247'
  }
})
