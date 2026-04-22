import CardLarge from '@/components/cardlarge';
import CardRow from '@/components/cardrow';
import CardSmall from '@/components/cardsmall';
import NavButton from '@/components/navbutton';
import { styles } from '@/constants/exercicio01.styles';
import { View } from 'react-native';


export default function Exercicio01Screen() {
  return (
    <View style={styles.container}>

      <View style={styles.navRow}>
        <NavButton label="Home" />
        <NavButton label="Perfil" />
      </View>

      <CardLarge />

      <CardRow />

      <CardSmall />

    </View>
  );
}