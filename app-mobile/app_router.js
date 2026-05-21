import React from "react";

import {
  NavigationContainer
} from "@react-navigation/native";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

import CarrinhoScreen
from "../screens/CarrinhoScreen";

import AdminScreen
from "../screens/AdminScreen";

const Stack =
createNativeStackNavigator();

export default function AppRoutes() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Carrinho"
          component={CarrinhoScreen}
        />

        <Stack.Screen
          name="Admin"
          component={AdminScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}