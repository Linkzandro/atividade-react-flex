import { styles } from '@/constants/exercicio02.styles';
import { View } from 'react-native';

export default function Tela02() {
  return (
    <View style={styles.container}>

      <View style={[styles.card, styles.secao1]}>
        <View style={styles.circle} />
        <View style={styles.circle} />
        <View style={styles.circle} />
      </View>

      <View style={[styles.card, styles.secao2]}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>

      <View style={[styles.card, styles.secao3]}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>

      <View style={[styles.card, styles.secao4]}>
        <View style={styles.square} />
        <View style={styles.square} />
      </View>

    </View>
  );
}