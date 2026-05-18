const Usuario =
require("../models/Usuario");

const bcrypt =
require("bcryptjs");

const jwt =
require("jsonwebtoken");

const SECRET =
"segredo_delivery";

const registrar =
async (req, res) => {

  try {

    const {
      nome,
      email,
      senha
    } = req.body;

    const senhaHash =
    await bcrypt.hash(senha, 10);

    const usuario =
    await Usuario.create({

      nome,
      email,
      senha: senhaHash

    });

    res.status(201).json(usuario);

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });
  }
};

const login =
async (req, res) => {

  try {

    const {
      email,
      senha
    } = req.body;

    const usuario =
    await Usuario.findOne({
      where: { email }
    });

    if (!usuario) {

      return res.status(404).json({
        erro: "Usuário não encontrado"
      });
    }

    const senhaValida =
    await bcrypt.compare(
      senha,
      usuario.senha
    );

    if (!senhaValida) {

      return res.status(401).json({
        erro: "Senha inválida"
      });
    }

    const token =
    jwt.sign(

      {
        id: usuario.id
      },

      SECRET,

      {
        expiresIn: "7d"
      }

    );

    res.json({

      usuario,
      token

    });

  } catch (error) {

    res.status(500).json({
      erro: error.message
    });
  }
};

module.exports = {
  registrar,
  login
};