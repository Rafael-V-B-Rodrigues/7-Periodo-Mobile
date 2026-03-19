import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../src/styles/theme'; // Verifique se o caminho está correto para o seu arquivo

export default function CustomButton({ title, onPress, color }) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: color || theme.colors.primary }]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: theme.spacing.medium,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: theme.spacing.small,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fonts.regular,
    fontWeight: 'bold',
  }
});