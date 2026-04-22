import { styles } from '@/constants/exercicio01.styles';
import { View } from 'react-native';

export default function CardLarge() {
  return (
    <View style={styles.cardLarge}>
      <View style={styles.innerBlock} />
    </View>
  );
}