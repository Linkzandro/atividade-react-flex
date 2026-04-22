import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    gap: spacing.md,
  },

  navRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  button: {
    flex: 1,
    backgroundColor: colors.dark,
    paddingVertical: spacing.sm + 2,
    borderRadius: radius.sm,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: colors.btnText,
  },

  cardLarge: {
    flex: 3,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.md,
  },

  cardRow: {
    flex: 2,
    flexDirection: 'row',
    gap: spacing.md,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.md,
  },

  cardSmall: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.md,
  },

  innerBlock: {
    flex: 1,
    backgroundColor: colors.dark,
    borderRadius: radius.md,
  },
});
