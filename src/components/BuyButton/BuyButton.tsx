import { View, TouchableOpacity, Text } from 'react-native'
import { styles } from './BuyButtonStyle';
import { AntDesign } from '@expo/vector-icons';

export default function ByButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> Animes View </Text>
      </TouchableOpacity>
    </View>
  );
};