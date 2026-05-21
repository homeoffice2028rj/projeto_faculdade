import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lanchonete Sabor & Cia
      </Text>

      <Text style={styles.subtitle}>
        App React Native funcionando 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff6600"
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18
  }
});