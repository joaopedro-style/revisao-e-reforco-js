'use strict';

/* Módulos ESM: EcmaScript Modules (sistema atual, moderno) */
function saudacao(nome) {
    console.log("Olá " + nome + "!");
}

const clientes = ["João", "Pedro", "Gabriel"];

function separador() {
    console.log("\n**********************************\n");
};

export { saudacao, clientes, separador }