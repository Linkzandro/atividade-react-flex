import { styles } from '@/constants/exercicio01.styles';
import { View } from 'react-native';

export default function CardSmall() {
  return (
    <View style={styles.cardSmall}>
      <View style={styles.innerBlock} />
    </View>
  );
}