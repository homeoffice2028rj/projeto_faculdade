const calcularFrete =
    (bairro) => {

        const taxas = {

            Centro: 5,

            Copacabana: 8,

            Tijuca: 10,

            Barra: 15

        };


        return taxas[bairro] || 20;

};


module.exports =
    calcularFrete;