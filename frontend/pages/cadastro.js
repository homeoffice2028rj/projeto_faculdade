const form =
document.getElementById(
   "formCadastro"
);


form.addEventListener(

   "submit",

   async (e) => {

      e.preventDefault();


      const nome =
      document.getElementById(
         "nome"
      ).value;

      const email =
      document.getElementById(
         "email"
      ).value;

      const senha =
      document.getElementById(
         "senha"
      ).value;

      const telefone =
      document.getElementById(
         "telefone"
      ).value;


      const resposta =
      await fetch(

         "http://localhost:3000/api/clientes/cadastro",

         {

            method: "POST",

            headers: {

               "Content-Type":
               "application/json"

            },

            body: JSON.stringify({

               nome,

               email,

               senha,

               telefone

            })

         }

      );


      const dados =
      await resposta.json();


      alert(
         dados.mensagem
      );

   }

);