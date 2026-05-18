const { DataTypes } = require("sequelize");

const sequelize = require("../database/db");

const Produto = sequelize.define("Produto", {

  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },

  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  descricao: {
    type: DataTypes.STRING
  },

  imagem: {
    type: DataTypes.STRING
  }

});

module.exports = Produto;