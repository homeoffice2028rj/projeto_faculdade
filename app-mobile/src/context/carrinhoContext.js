import React, {
  createContext,
  useState
} from "react";

export const CarrinhoContext =
createContext({});

export function CarrinhoProvider({
  children
}) {

  const [carrinho, setCarrinho] =
  useState([]);

  function adicionarProduto(produto) {

    setCarrinho((prev) => [
      ...prev,
      produto
    ]);
  }

  function removerProduto(index) {

    const novoCarrinho = [...carrinho];

    novoCarrinho.splice(index, 1);

    setCarrinho(novoCarrinho);
  }

  const total = carrinho.reduce(
    (acc, item) =>
      acc + Number(item.preco),
    0
  );

  return (

    <CarrinhoContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        removerProduto,
        total
      }}
    >

      {children}

    </CarrinhoContext.Provider>
  );
}