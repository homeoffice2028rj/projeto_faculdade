const { DataTypes } = require("sequelize");

const sequelize = require("../database/db");

const Pedido = sequelize.define("Pedido", {

  produtos: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  total: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  status: {
    type: DataTypes.STRING,
    defaultValue: "Pendente"
  }

});

module.exports = Pedido;