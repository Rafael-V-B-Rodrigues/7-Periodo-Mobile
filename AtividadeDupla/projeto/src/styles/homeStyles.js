import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const homeStyles = StyleSheet.create({
  welcomeText: {
    fontSize: theme.fonts.regular,
    color: theme.colors.text,
    textAlign: 'center',
    marginTop: theme.spacing.large,
    lineHeight: 24, 
  }
});