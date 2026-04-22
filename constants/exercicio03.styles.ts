import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xl,
    gap: spacing.xl,
  },

  card: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.md,
    gap: spacing.xl,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: colors.dark,
  },
  textGroup: {
    flex: 1,
    gap: spacing.xs,
  },
  titleBar: {
    height: 20,
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
    width: '80%',
  },
  subtitleBar: {
    height: 16,
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
    opacity: 0.5,
    width: '60%',
  },

  button: {
    height: 60,
    borderRadius: radius.md,
    backgroundColor: colors.dark,
  },
});
