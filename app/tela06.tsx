import { styles } from '@/constants/exercicio06.styles';
import { View } from 'react-native';

export default function Tela06() {
  return (
    <View style={styles.container}>

      <View style={styles.outerCard}>
        <View style={styles.header}>
          <View style={styles.avatar} />
          <View style={styles.titleBar} />
          <View style={styles.subtitleBar} />
        </View>
      </View>

      <View style={styles.outerCard}>
        <View style={styles.statsRow}>
          <View style={styles.statCard} />
          <View style={styles.statCard} />
          <View style={styles.statCard} />
        </View>
      </View>

      <View style={styles.outerCard}>
        <View style={styles.buttonRow}>
          <View style={styles.button} />
          <View style={styles.button} />
        </View>
      </View>

      <View style={styles.outerCard}>
        <View style={styles.footer}>
          <View style={styles.footerLine} />
          <View style={styles.footerLine2} />
        </View>
      </View>

    </View>
  );
}