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

export default function LoginScreen({
  navigation
}) {

  const [email, setEmail] =
  useState("");

  const [senha, setSenha] =
  useState("");

  async function login() {

    try {

      const response =
      await api.post(
        "/usuarios/login",
        {
          email,
          senha
        }
      );

      console.log(response.data);

      alert("Login realizado!");

      navigation.navigate("Home");

    } catch (error) {

      console.log(error);

      alert("Erro no login");
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
        Login
      </Text>

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
        onPress={login}
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
          Entrar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Register")
        }
        style={{
          marginTop: 20
        }}
      >

        <Text
          style={{
            textAlign: "center"
          }}
        >
          Criar conta
        </Text>

      </TouchableOpacity>

    </View>
  );
}