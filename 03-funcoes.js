// 03-funcoes.js
'use strict';

exemplo1(); // chamada da função

/* Sintaxe tradicional, função nomeada a ordem de declaração da função neste caso NÂO IMPORTA */
function exemplo1(){
    console.log("Função nomeada");
};

exemplo1(); // chamada da função


function separador(){
    console.log("\n**********************************\n");
};

separador();

// chamada aqui dá erro, pois não pode ser feita antes da declaração exemplo2();

/* Sintaxe tradicional, função anônima Nesta sintaxe, a ordem, IMPORTA. */
const exemplo2 = function(){
    console.log("Função anônima");
};

exemplo2(); // chamada (sempre após declarar a função anônima)


separador();




