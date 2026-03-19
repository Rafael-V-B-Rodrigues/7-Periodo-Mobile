import { StyleSheet } from 'react-native';
import { theme } from './theme';

export const scrollStyles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    marginTop: theme.spacing.medium,
  },
  listContent: {
    paddingBottom: theme.spacing.large,
  },
  scrollContent: {
    paddingBottom: theme.spacing.large,
  },
  itemScroll: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary, 
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2, shadowOffset: { width: 0, height: 1 },
  },
  itemFlat: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.secondary, 
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2, shadowOffset: { width: 0, height: 1 },
  },
  itemSection: {
    backgroundColor: theme.colors.white,
    padding: theme.spacing.medium,
    marginVertical: theme.spacing.small,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#10b981', 
    elevation: 2, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 2, shadowOffset: { width: 0, height: 1 },
  },
  itemText: {
    color: theme.colors.text,
    fontSize: theme.fonts.regular,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: theme.fonts.title,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: theme.spacing.large,
    marginBottom: theme.spacing.small,
  }
});