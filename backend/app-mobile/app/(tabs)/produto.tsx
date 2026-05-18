import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

export default function Produto() {

  return (

    <View style={styles.container}>

      <Image
        source={{
          uri: "https://via.placeholder.com/300"
        }}
        style={styles.imagem}
      />

      <Text style={styles.nome}>
        X-Burger Especial
      </Text>

      <Text style={styles.descricao}>
        Hambúrguer artesanal com queijo,
        alface, tomate e molho especial.
      </Text>

      <Text style={styles.preco}>
        R$ 24,90
      </Text>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>
          Adicionar ao Carrinho
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20
  },

  imagem: {
    width: "100%",
    height: 250,
    borderRadius: 12
  },

  nome: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20
  },

  descricao: {
    fontSize: 18,
    color: "#555",
    marginTop: 10
  },

  preco: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff6600",
    marginTop: 20
  },

  botao: {
    backgroundColor: "#ff6600",
    padding: 15,
    borderRadius: 10,
    marginTop: 30,
    alignItems: "center"
  },

  botaoTexto: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});