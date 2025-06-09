'use strict';

function minhaFuncao() {
    console.log("Olá! Função criada em um módulo");
};

const clientes = ['Jon Oliva', 'João', 'David Gilmour'];

/* CJS: CommonJS */
module.exports = { minhaFuncao, clientes };