import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const modalStyles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: theme.colors.white,
    padding: theme.spacing.large,
    borderRadius: 8,
    alignItems: 'center',
    borderTopWidth: 6, 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  borderSlide: { borderTopColor: theme.colors.primary }, 
  borderFade: { borderTopColor: theme.colors.secondary }, 
  borderNone: { borderTopColor: theme.colors.tertiary}, 
  
  modalText: {
    fontSize: theme.fonts.regular,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.large,
  }
});