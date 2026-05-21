import { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList
} from "react-native";

export default function Home() {

  const [produtos] = useState([
    {
      id: 1,
      nome: "X-Burger",
      preco: 18
    },
    {
      id: 2,
      nome: "Batata Frita",
      preco: 12
    }
  ]);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Lanchonete Sabor & Cia
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View style={styles.card}>

            <Text style={styles.nome}>
              {item.nome}
            </Text>

            <Text style={styles.preco}>
              R$ {item.preco}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ff6600",
    marginBottom: 20
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },

  nome: {
    fontSize: 20,
    fontWeight: "bold"
  },

  preco: {
    fontSize: 18,
    marginTop: 5
  }
});