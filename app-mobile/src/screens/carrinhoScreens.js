import React, {
  useContext
} from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from "react-native";

import api from "../services/api";

import {
  CarrinhoContext
} from "../context/CarrinhoContext";

export default function CarrinhoScreen() {

  const {
    carrinho,
    removerProduto,
    total
  } = useContext(CarrinhoContext);

  async function finalizarPedido() {

    try {

      await api.post("/pedidos", {

        produtos: JSON.stringify(carrinho),

        total

      });

      alert("Pedido realizado com sucesso!");

    } catch (error) {

      console.log(error);

      alert("Erro ao finalizar pedido");
    }
  }

  return (

    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: "#f4f4f4"
      }}
    >

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          marginBottom: 20
        }}
      >
        Carrinho
      </Text>

      <FlatList
        data={carrinho}
        keyExtractor={(item, index) =>
          index.toString()
        }
        renderItem={({ item, index }) => (

          <View
            style={{
              backgroundColor: "#fff",
              padding: 15,
              borderRadius: 10,
              marginBottom: 10
            }}
          >

            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold"
              }}
            >
              {item.nome}
            </Text>

            <Text
              style={{
                marginTop: 5
              }}
            >
              R$ {item.preco}
            </Text>

            <TouchableOpacity
              onPress={() =>
                removerProduto(index)
              }
              style={{
                marginTop: 10
              }}
            >

              <Text
                style={{
                  color: "red"
                }}
              >
                Remover
              </Text>

            </TouchableOpacity>

          </View>

        )}
      />

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 20
        }}
      >
        Total: R$ {total}
      </Text>

      <TouchableOpacity
        onPress={finalizarPedido}
        style={{
          backgroundColor: "#ff6600",
          padding: 15,
          borderRadius: 10,
          marginTop: 20
        }}
      >

        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18
          }}
        >
          Finalizar Pedido
        </Text>

      </TouchableOpacity>

    </View>
  );
}