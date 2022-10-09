import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Simple from "./components/simple";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>⬅ or ➡️</Text>
      <StatusBar style="auto" />
      <Simple />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
