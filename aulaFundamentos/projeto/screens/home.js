
import { StyleSheet, View } from 'react-native';
import Componente from '../components/Componente';
import Greeting from '../components/Greeting';
import Counter from '../components/Counter';



export default function Home() {
  return (
    <View style={styles.container}>
        <Componente/>
        <Greeting nome='Miguel'/>
        <Greeting nome='Rafael'/>
        <Greeting nome='Gabriel'/>
        <Counter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

});
