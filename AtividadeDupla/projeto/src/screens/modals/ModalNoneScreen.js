import { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { modalStyles } from '../../styles/modalStyles';
import { theme } from '../../styles/theme';
import ScreenContainer from '../../../components/ScreenContainer';
import CustomButton from '../../../components/CustomButton';

export default function ModalNoneScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[globalStyles.title, {color: theme.colors.tertiary}]}>Exemplo de Modal None</Text>
        <CustomButton color={theme.colors.tertiary} title="Abrir Modal Verde" onPress={() => setModalVisible(true)} />
      </View>

      <Modal animationType="none" transparent={true} visible={modalVisible}>
        <View style={modalStyles.modalOverlay}>
          <View style={[modalStyles.modalView, modalStyles.borderNone]}>
            <Text style={modalStyles.modalText}>Este é um Modal None</Text>
            <CustomButton color={theme.colors.tertiary} title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}