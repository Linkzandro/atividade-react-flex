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

  card: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: radius.lg,
    padding: spacing.md,
    flexDirection: 'row',
  },

  secao1: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secao2: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secao3: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',         
  },
  secao4: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.md,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.dark,
  },
  square: {
    width: 60,
    height: 60,
    borderRadius: radius.sm,
    backgroundColor: colors.dark,
  },
});
