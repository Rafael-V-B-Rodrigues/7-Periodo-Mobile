import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DrawerModalNavigator from './DrawerModalNavigator';
import DrawerScrollNavigator from './DrawerScrollNavigator';
import { theme } from '../styles/theme';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.white,
        headerTitleAlign: 'center',
        drawerActiveTintColor: theme.colors.primary,
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Início' }} 
      />
      <Drawer.Screen 
        name="Modais" 
        component={DrawerModalNavigator} 
        options={{ title: 'Modais' }} 
      />
      <Drawer.Screen 
        name="Scrolls" 
        component={DrawerScrollNavigator} 
        options={{ title: 'Listas (Scroll)' }} 
      />
    </Drawer.Navigator>
  );
}