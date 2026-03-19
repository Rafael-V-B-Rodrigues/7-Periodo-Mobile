import { View } from 'react-native';
import { globalStyles } from '../src/styles/globalStyles';


export default function ScreenContainer({ children }) {
  return (
    <View style={globalStyles.container}>
      {children}
    </View>
  );
}