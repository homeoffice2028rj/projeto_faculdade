const form =
    document.getElementById(
        "formCheckout"
    );


form.addEventListener(

    "submit",

    async (e) => {

        e.preventDefault();


        const carrinho =

            JSON.parse(

                localStorage.getItem(
                    "carrinho"
                )

            ) || [];


        const pedido = {

            cliente:
                document.getElementById(
                    "cliente"
                ).value,

            telefone:
                document.getElementById(
                    "telefone"
                ).value,


            endereco: {

                rua:
                    document.getElementById(
                        "rua"
                    ).value,

                numero:
                    document.getElementById(
                        "numero"
                    ).value,

                bairro:
                    document.getElementById(
                        "bairro"
                    ).value,

                cidade:
                    document.getElementById(
                        "cidade"
                    ).value,

                cep:
                    document.getElementById(
                        "cep"
                    ).value,

                complemento:
                    document.getElementById(
                        "complemento"
                    ).value

            },


            produtos:
                carrinho,

            total:
                carrinho.reduce(

                    (acc, item) =>

                        acc + item.preco,

                    0

                )

        };


        try {

            await fetch(

                "http://localhost:3000/api/pedidos",

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body: JSON.stringify(
                        pedido
                    )

                }

            );


            alert(
                "Pedido realizado"
            );


            localStorage.removeItem(
                "carrinho"
            );


            window.location.href =
                "acompanhar.html";

        } catch (error) {

            console.log(error);

        }

    }

);