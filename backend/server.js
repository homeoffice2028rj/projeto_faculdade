const express = require("express");

const sequelize = require("./database/db");

const produtoRoutes =
require("./routes/produtos");

const pedidoRoutes =
require("./routes/pedidos");

const Produto =
require("./models/Produto");

const usuarioRoutes =
require("./routes/usuarios");

const app = express();

app.use(express.json());

app.use("/usuarios", usuarioRoutes);

sequelize.sync()
  .then(() => {
    console.log("SQLite conectado");
  })
  .catch((err) => {
    console.log(err);
  });

async function criarProdutosIniciais() {

  const quantidade =
  await Produto.count();

  if (quantidade === 0) {

    await Produto.bulkCreate([

      {
        nome: "X-Burger",
        preco: 18,
        descricao: "Hambúrguer artesanal",
        imagem: "https://via.placeholder.com/150"
      },

      {
        nome: "Batata Frita",
        preco: 12,
        descricao: "Batata crocante",
        imagem: "https://via.placeholder.com/150"
      }

    ]);

    console.log("Produtos iniciais criados");
  }
}

criarProdutosIniciais();

app.use("/produtos", produtoRoutes);

app.use("/pedidos", pedidoRoutes);

app.get("/", (req, res) => {
  res.send("API funcionando");
});

app.listen(5000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 5000");
});