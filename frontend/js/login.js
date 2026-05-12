const loginCliente =
async (req, res) => {

   try {

      const {

         email,

         senha

      } = req.body;


      const cliente =
      await Cliente.findOne({

         email

      });


      if(!cliente) {

         return res.status(400).json({

            mensagem:
            "Cliente não encontrado"

         });

      }


      const senhaCorreta =
      await bcrypt.compare(

         senha,

         cliente.senha

      );


      if(!senhaCorreta) {

         return res.status(400).json({

            mensagem:
            "Senha inválida"

         });

      }


      const token =
      jwt.sign(

         {

            id: cliente._id

         },

         process.env.JWT_SECRET,

         {

            expiresIn: "7d"

         }

      );


      res.status(200).json({

         mensagem:
         "Login realizado",

         token

      });

   } catch(error) {

      res.status(500).json({

         mensagem:
         "Erro login"

      });

   }

};