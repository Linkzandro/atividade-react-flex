
import UserCard from '@/components/usercard';
import { styles } from '@/constants/exercicio03.styles';
import { View } from 'react-native';

export default function Tela03() {
  return (
    <View style={styles.container}>
      <UserCard />
      <UserCard />
      <UserCard />
    </View>
  );
}