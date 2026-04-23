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

  header: {
    flex: 1,
    backgroundColor: colors.cardBg,
    padding:spacing.md,
    borderRadius: radius.lg,
  },
  mainArea: {
    flex: 4,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding:spacing.md,
  },
  cardRow: {
    flex: 2,             
    flexDirection: 'row',
    gap: spacing.md,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding:spacing.md,
  },
  outerCard: {
    flex:1,
    backgroundColor: colors.cardBg,
    padding:spacing.md,
    borderRadius: radius.lg,
  },
  innerCard:{
    flex:1,
    backgroundColor: colors.dark,
    borderRadius: radius.lg,
  },

  card: {
    flex: 1,
    backgroundColor: colors.dark,
    borderRadius: radius.lg,
  },
});
