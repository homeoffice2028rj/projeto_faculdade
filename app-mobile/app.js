import React from "react";

import AppRoutes
from "./src/navigation/AppRoutes";

import {
  CarrinhoProvider
} from "./src/context/CarrinhoContext";

export default function App() {

  return (

    <CarrinhoProvider>

      <AppRoutes />

    </CarrinhoProvider>
  );
}