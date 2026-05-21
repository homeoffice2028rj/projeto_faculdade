import React, {
  useEffect,
  useState,
  useContext
} from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

import api from "../services/api";

import {
  CarrinhoContext
} from "../context/CarrinhoContext";

export default function HomeScreen({
  navigation
}) {

  const [produtos, setProdutos] =
  useState([]);

  const {
    adicionarProduto,
    carrinho
  } = useContext(CarrinhoContext);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {

    try {

      const response =
      await api.get("/produtos");

      setProdutos(response.data);

    } catch (error) {

      console.log(error);
    }
  }

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: "#f4f4f4",
        padding: 20
      }}
    >

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 20,
          color: "#ff6600"
        }}
      >
        Lanchonete Sabor & Cia
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (

          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 12,
              marginBottom: 15
            }}
          >

            <Image
              source={{
                uri: item.imagem
              }}
              style={{
                width: "100%",
                height: 150,
                borderRadius: 10
              }}
            />

            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 10
              }}
            >
              {item.nome}
            </Text>

            <Text
              style={{
                marginTop: 5,
                color: "#666"
              }}
            >
              {item.descricao}
            </Text>

            <Text
              style={{
                marginTop: 10,
                fontSize: 20,
                color: "#d62828",
                fontWeight: "bold"
              }}
            >
              R$ {item.preco}
            </Text>

            <TouchableOpacity
              onPress={() =>
                adicionarProduto(item)
              }
              style={{
                backgroundColor: "#ff6600",
                padding: 12,
                borderRadius: 10,
                marginTop: 15
              }}
            >

              <Text
                style={{
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "bold"
                }}
              >
                Adicionar ao Carrinho
              </Text>

            </TouchableOpacity>

          </View>
        )}
      />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Carrinho")
        }
        style={{
          backgroundColor: "#222",
          padding: 15,
          borderRadius: 12
        }}
      >

        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold"
          }}
        >
          Ir para Carrinho ({carrinho.length})
        </Text>

      </TouchableOpacity>

    </View>
  );
}