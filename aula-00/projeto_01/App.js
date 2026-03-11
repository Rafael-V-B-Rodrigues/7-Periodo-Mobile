import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import New from './src/screens/New';
import Relatorios from './src/screens/Relatorios';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Novo" component={New} />
        <Stack.Screen name="Relatorios" component={Relatorios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
