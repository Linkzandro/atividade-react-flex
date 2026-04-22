import { styles } from '@/constants/exercicio04.styles';
import { View } from 'react-native';

export default function Tela04() {
  return (
    <View style={styles.container}>

      <View style={styles.header} >
        <View style={styles.innerCard}></View>
      </View>
      

      <View style={styles.mainArea} >
        <View style={styles.innerCard}></View>
      </View>

      <View style={styles.cardRow}>
        <View style={styles.outerCard}>
            <View style={styles.card} />
        </View>

        <View style={styles.outerCard}>
            <View style={styles.card} />
        </View>
      </View>

      <View style={styles.footer} >
        <View style={styles.innerCard}></View>
      </View>

    </View>
  );
}