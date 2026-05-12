const listaCarrinho =
    document.getElementById(
        "listaCarrinho"
    );

const totalElemento =
    document.getElementById(
        "total"
    );


// PEGAR CARRINHO

let carrinho =
    JSON.parse(

        localStorage.getItem(
            "carrinho"
        )

    ) || [];


// MOSTRAR CARRINHO

const carregarCarrinho =
    () => {

        listaCarrinho.innerHTML = "";

        let total = 0;


        if(carrinho.length === 0) {

            listaCarrinho.innerHTML = `

                <p>
                    Carrinho vazio
                </p>

            `;

        }


        carrinho.forEach(

            (produto, index) => {

                total += produto.preco;


                listaCarrinho.innerHTML += `

                    <div class="item">

                        <div>

                            <h3>

                                ${produto.nome}

                            </h3>

                            <p>

                                ${produto.descricao || ""}

                            </p>

                            <h4>

                                R$ ${produto.preco}

                            </h4>

                        </div>

                        <button
                            onclick="
                                removerProduto(${index})
                            "
                        >

                            Remover

                        </button>

                    </div>

                `;

            }

        );


        totalElemento.innerHTML =

            `Total: R$ ${total.toFixed(2)}`;

};


// REMOVER PRODUTO

const removerProduto =
    (index) => {

        carrinho.splice(index, 1);


        localStorage.setItem(

            "carrinho",

            JSON.stringify(carrinho)

        );


        carregarCarrinho();

};


// FINALIZAR PEDIDO

const finalizarPedido =
    async () => {

        if(carrinho.length === 0) {

            alert(
                "Carrinho vazio"
            );

            return;

        }


        try {

            const resposta =
                await fetch(

                    "http://localhost:3000/api/pedidos",

                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                                "application/json"

                        },

                        body: JSON.stringify({

                            produtos:
                                carrinho,

                            total:
                                carrinho.reduce(

                                    (
                                        acc,
                                        item
                                    ) =>

                                        acc +
                                        item.preco,

                                    0

                                )

                        })

                    }

                );


            const dados =
                await resposta.json();

            console.log(dados);


            alert(
                "Pedido realizado"
            );


            localStorage.removeItem(
                "carrinho"
            );


            carrinho = [];


            carregarCarrinho();

        } catch (error) {

            console.log(error);

        }

};


// BOTÃO FINALIZAR

document
.getElementById(
    "finalizarPedido"
)

.addEventListener(

    "click",

    finalizarPedido

);


// INICIAR

carregarCarrinho();