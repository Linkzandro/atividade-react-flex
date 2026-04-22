import { styles } from '@/constants/exercicio01.styles';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  label: string;
};

export default function NavButton({ label }: Props) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}