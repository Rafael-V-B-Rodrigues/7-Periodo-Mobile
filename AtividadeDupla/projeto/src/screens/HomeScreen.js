import { Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { homeStyles } from '../styles/homeStyles';
import ScreenContainer from '../../components/ScreenContainer';

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <Text style={globalStyles.title}>Página Inicial</Text>
      <Text style={homeStyles.welcomeText}>
        Bem-vindo ao aplicativo. Utilize o menu de navegação para acessar as telas de modais e as listas com rolagem.
      </Text>
    </ScreenContainer>
  );
}