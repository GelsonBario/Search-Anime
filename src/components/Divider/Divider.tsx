import { View } from "react-native";
import { styles } from "./DividerStyle";


export default function Divider() {
  return (
    <View style={styles.dividerContainer}>
      <View style={styles.divider}></View>
    </View>
  )
}