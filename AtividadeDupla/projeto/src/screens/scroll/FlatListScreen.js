import { Text, View } from 'react-native';
import { scrollStyles } from '../../styles/scrollStyles';
import { globalStyles } from '../../styles/globalStyles';
import { listData } from '../../utils/data';
import { FlatList } from 'react-native-web';
import { theme } from '../../styles/theme';
import ScreenContainer from '../../../components/ScreenContainer';

export default function FlatListScreen() {
  return (
    <ScreenContainer>
      <View style={scrollStyles.contentWrapper}>
        <Text style={[globalStyles.title, {color: theme.colors.secondary}]}>Exemplo de FlatList</Text>
        
        <FlatList
          data={listData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={scrollStyles.itemFlat}>
              <Text style={scrollStyles.itemText}>{item.title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={scrollStyles.listContent}
        />
      </View>
    </ScreenContainer>
  );
}

