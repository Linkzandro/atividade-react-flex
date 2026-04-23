import { StyleSheet } from 'react-native';
import { colors, radius, spacing } from './globalStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xl,
    gap: spacing.lg,
  },

  outerCard: {
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },

  header: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: colors.dark,
    marginBottom: spacing.xs,
    marginTop:spacing.xxl
  },
  titleBar: {
    height: 20,
    width: '60%',
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
  },
  subtitleBar: {
    height: 18,
    width: '45%',
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
    opacity: 0.5,
    marginBottom:spacing.xl
  },

  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statCard: {
    width: 80,
    height: 60,
    backgroundColor: colors.dark,
    borderRadius: radius.md,
  },

  buttonRow: {
    flexDirection: 'row',
    gap: spacing.xl,
  },
  button: {
    flex: 1,
    height: 50,
    backgroundColor: colors.dark,
    borderRadius: radius.md,
  },

  footer: {
    gap: spacing.sm,
  },
  footerLine: {
    height: 20,
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
  },
  footerLine2: {
    height: 20,
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
    opacity: 0.4,
  },
});
