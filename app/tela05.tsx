import { styles } from '@/constants/exercicio05.styles';
import { View } from 'react-native';

export default function Tela05() {
  return (
    <View style={styles.container}>

      <View style={styles.searchBar}>
        <View style={styles.searchInput} />
        <View style={styles.searchButton} />
      </View>

      <View style={styles.grid}>

        <View style={styles.row}>
            <View style={styles.card} ><View style={styles.innerCard} /></View>
            <View style={styles.card} ><View style={styles.innerCard} /></View>

        </View>

        <View style={styles.row}>
            <View style={styles.card} ><View style={styles.innerCard} /></View>
            <View style={styles.card} ><View style={styles.innerCard} /></View>
        </View>

        <View style={styles.row}>
            <View style={styles.card} ><View style={styles.innerCard} /></View>
            <View style={styles.card} ><View style={styles.innerCard} /></View>
        </View>

    </View>

    </View>

    
  );
}