import { ScrollView, Text, View } from 'react-native';
import { scrollStyles } from '../../styles/scrollStyles';
import { globalStyles } from '../../styles/globalStyles';
import { listData } from '../../utils/data';
import { theme } from '../../styles/theme';
import ScreenContainer from '../../../components/ScreenContainer';


export default function ScrollViewScreen() {
  return (
    <ScreenContainer>    
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={scrollStyles.scrollContent}
      >
        <Text style={[globalStyles.title, { marginTop: theme.spacing.medium, color: theme.colors.primary }]}>
          Exemplo de ScrollView
        </Text>
        
        {listData.map((item) => (
          <View key={item.id} style={scrollStyles.itemScroll}>
            <Text style={scrollStyles.itemText}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}