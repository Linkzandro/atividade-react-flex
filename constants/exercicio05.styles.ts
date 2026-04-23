import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  searchInput: {
    flex: 1,
    height: 44,
    backgroundColor: colors.cardBg,
    borderRadius: 22,
  },
  searchButton: {
    width: 76,
    height: 44,
    backgroundColor: colors.dark,
    borderRadius: radius.md,
  },

  grid: {
    gap: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding:spacing.lg,
  },
  innerCard:{
    flex:1,
    backgroundColor: colors.dark,
    borderRadius: radius.lg,
  },
});
