const Produto = require("../models/Produto");

const listarProdutos = async (req, res) => {

  try {

    const produtos =
    await Produto.findAll();

    res.json(produtos);

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });
  }
};

const criarProduto = async (req, res) => {

  try {

    const produto =
    await Produto.create(req.body);

    res.status(201).json(produto);

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });
  }
};

module.exports = {
  listarProdutos,
  criarProduto
};