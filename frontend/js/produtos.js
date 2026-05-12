const listaProdutos =
    document.getElementById(
        "listaProdutos"
    );


// BUSCAR PRODUTOS API

const carregarProdutos =
    async () => {

        try {

            const resposta =
                await fetch(

                    "http://localhost:3000/api/produtos"

                );

            const produtos =
                await resposta.json();


            listaProdutos.innerHTML = "";


            produtos.forEach((produto) => {

                listaProdutos.innerHTML += `

                    <div class="produto">

                        <img
                            src="${produto.imagem}"
                            alt="${produto.nome}"
                        >

                        <h3>

                            ${produto.nome}

                        </h3>

                        <p>

                            ${produto.descricao}

                        </p>

                        <h4>

                            R$ ${produto.preco}

                        </h4>

                        <button
                            onclick='adicionarCarrinho(${JSON.stringify(produto)})'
                        >

                            Adicionar

                        </button>

                    </div>

                `;

            });

        } catch (error) {

            console.log(error);

        }

};


// ADICIONAR CARRINHO

const adicionarCarrinho =
    (produto) => {

        let carrinho =

            JSON.parse(

                localStorage.getItem(
                    "carrinho"
                )

            ) || [];


        carrinho.push(produto);


        localStorage.setItem(

            "carrinho",

            JSON.stringify(carrinho)

        );


        alert(
            "Produto adicionado"
        );

};


// INICIAR

carregarProdutos();