import { styles } from '@/constants/exercicio01.styles';
import { View } from 'react-native';

export default function CardRow() {
  return (
    <View style={styles.cardRow}>
      <View style={styles.innerBlock} />
      <View style={styles.innerBlock} />
    </View>
  );
}