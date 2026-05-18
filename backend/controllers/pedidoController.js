const Pedido = require("../models/Pedido");

const listarPedidos = async (req, res) => {

  try {

    const pedidos =
    await Pedido.findAll();

    res.json(pedidos);

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });
  }
};

const criarPedido = async (req, res) => {

  try {

    const pedido =
    await Pedido.create(req.body);

    res.status(201).json(pedido);

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });
  }
};

module.exports = {
  listarPedidos,
  criarPedido
};