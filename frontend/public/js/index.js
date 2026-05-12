* =========================
   MENU ATIVO
========================= */

const links =
document.querySelectorAll("nav a");

links.forEach((link)=>{

    link.addEventListener("click", ()=>{

        links.forEach((item)=>{

            item.classList.remove("active");

        });

        link.classList.add("active");

    });

});

/* =========================
   SCROLL HEADER
========================= */

const header =
document.querySelector("header");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        header.classList.add("scroll");

    }else{

        header.classList.remove("scroll");

    }

});

/* =========================
   BOTÕES COMPRAR
========================= */

const botoesComprar =
document.querySelectorAll(".btn-primary");

botoesComprar.forEach((botao)=>{

    botao.addEventListener("click", ()=>{

        mostrarMensagem(
            "Produto adicionado ao carrinho 🛒"
        );

    });

});

/* =========================
   TOAST MENSAGEM
========================= */

function mostrarMensagem(texto){

    const toast =
    document.createElement("div");

    toast.classList.add("toast");

    toast.innerHTML = texto;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },2500);

}

/* =========================
   SCROLL SUAVE
========================= */

document.querySelectorAll('a[href^="#"]')
.forEach((anchor)=>{

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const destino =
        document.querySelector(
            this.getAttribute("href")
        );

        destino.scrollIntoView({

            behavior:"smooth"

        });

    });

});

/* =========================
   ANIMAÇÃO ENTRADA
========================= */

const elementos =
document.querySelectorAll(
    ".card-produto, .card-vantagem"
);

function animarElementos(){

    const topoTela =
    window.innerHeight * 0.85;

    elementos.forEach((elemento)=>{

        const posicao =
        elemento.getBoundingClientRect().top;

        if(posicao < topoTela){

            elemento.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    animarElementos
);

animarElementos();

/* =========================
   CONTADOR CARRINHO
========================= */

let contadorCarrinho = 0;

const btnCarrinho =
document.querySelector(".btn-carrinho");

botoesComprar.forEach((botao)=>{

    botao.addEventListener("click", ()=>{

        contadorCarrinho++;

        btnCarrinho.innerHTML =
        `🛒 Carrinho (${contadorCarrinho})`;

    });

});

/* =========================
   EFEITO DIGITAÇÃO
========================= */

const titulo =
document.querySelector(".banner-text h1");

const textoOriginal =
titulo.innerHTML;

titulo.innerHTML = "";

let index = 0;

function escreverTexto(){

    if(index < textoOriginal.length){

        titulo.innerHTML +=
        textoOriginal.charAt(index);

        index++;

        setTimeout(
            escreverTexto,
            50
        );

    }

}

escreverTexto();

/* =========================
   BOTÃO VOLTAR TOPO
========================= */

const btnTopo =
document.createElement("button");

btnTopo.innerHTML = "⬆";

btnTopo.classList.add("btn-topo");

document.body.appendChild(btnTopo);

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        btnTopo.classList.add("show");

    }else{

        btnTopo.classList.remove("show");

    }

});

btnTopo.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

/* =========================
   LOADING INICIAL
========================= */

window.addEventListener("load", ()=>{

    const loader =
    document.createElement("div");

    loader.classList.add("loader");

    loader.innerHTML =
    "🍔 Carregando...";

    document.body.appendChild(loader);

    setTimeout(()=>{

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },500);

    },1200);

});

/* =========================
   CONSOLE INFO
========================= */

console.log(
    "Sistema Sabor & Cia iniciado 🚀"
);