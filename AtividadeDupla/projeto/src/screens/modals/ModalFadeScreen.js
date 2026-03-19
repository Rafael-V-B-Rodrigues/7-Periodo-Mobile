import { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { modalStyles } from '../../styles/modalStyles';
import { theme } from '../../styles/theme';
import ScreenContainer from '../../../components/ScreenContainer';
import CustomButton from '../../../components/CustomButton';

export default function ModalFadeScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[globalStyles.title, {color: theme.colors.secondary}]}>Exemplo de Modal Fade</Text>
        <CustomButton color={theme.colors.secondary} title="Abrir Modal Laranja" onPress={() => setModalVisible(true)} />
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={modalStyles.modalOverlay}>
          <View style={[modalStyles.modalView, modalStyles.borderFade]}>
            <Text style={modalStyles.modalText}>Este é um Modal com animação Fade</Text>
            <CustomButton color={theme.colors.secondary} title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}