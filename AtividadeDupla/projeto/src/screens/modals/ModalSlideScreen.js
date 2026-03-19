import { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';
import { modalStyles } from '../../styles/modalStyles';
import ScreenContainer from '../../../components/ScreenContainer';
import CustomButton from '../../../components/CustomButton';
import { theme } from '../../styles/theme';

export default function ModalSlideScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScreenContainer>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={[globalStyles.title, {color: theme.colors.primary}]}>Exemplo de Modal Slide</Text>
        <CustomButton title="Abrir Modal Azul" onPress={() => setModalVisible(true)} />
      </View>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={modalStyles.modalOverlay}>
          <View style={[modalStyles.modalView, modalStyles.borderSlide]}>
            <Text style={modalStyles.modalText}>Este é um Modal com animação Slide</Text>
            <CustomButton title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScreenContainer>
  );
}