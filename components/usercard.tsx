import { styles } from '@/constants/exercicio03.styles';
import { TouchableOpacity, View } from 'react-native';

export default function UserCard() {
  return (
    <View style={styles.card}>

      <View style={styles.cardTop}>
        <View style={styles.avatar} />

        <View style={styles.textGroup}>
          <View style={styles.titleBar} />
          <View style={styles.subtitleBar} />
        </View>
      </View>

      <TouchableOpacity style={styles.button} />

    </View>
  );
}