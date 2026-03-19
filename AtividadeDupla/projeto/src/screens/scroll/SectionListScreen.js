import { SectionList, Text, View } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { scrollStyles } from '../../styles/scrollStyles';
import { sectionData } from '../../utils/data';
import { theme } from '../../styles/theme';
import ScreenContainer from '../../../components/ScreenContainer';


export default function SectionListScreen() {
  return (
    <ScreenContainer>      
      <View style={{ flex: 1, marginTop: theme.spacing.medium }}>
        <Text style={[globalStyles.title, {color: theme.colors.tertiary}]}>Exemplo de SectionList</Text>
        
        <SectionList
          sections={sectionData}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <View style={scrollStyles.itemSection}>
              <Text style={scrollStyles.itemText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={scrollStyles.sectionHeader}>{title}</Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenContainer>
  );
}