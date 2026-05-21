import React, {
  useState
} from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import api from "../services/api";

export default function RegisterScreen({
  navigation
}) {

  const [nome, setNome] =
  useState("");

  const [email, setEmail] =
  useState("");

  const [senha, setSenha] =
  useState("");

  async function registrar() {

    try {

      await api.post(
        "/usuarios/register",
        {
          nome,
          email,
          senha
        }
      );

      alert("Conta criada!");

      navigation.navigate("Login");

    } catch (error) {

      console.log(error);

      alert("Erro ao registrar");
    }
  }

  return (

    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f4f4f4"
      }}
    >

      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          marginBottom: 30,
          color: "#ff6600"
        }}
      >
        Criar Conta
      </Text>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15
        }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15
        }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{
          backgroundColor: "#fff",
          padding: 15,
          borderRadius: 10,
          marginBottom: 20
        }}
      />

      <TouchableOpacity
        onPress={registrar}
        style={{
          backgroundColor: "#ff6600",
          padding: 15,
          borderRadius: 10
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
          Registrar
        </Text>

      </TouchableOpacity>

    </View>
  );
}