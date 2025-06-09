// 03-funcoes.js
'use strict';

exemplo1(); // chamada da função

/* Sintaxe tradicional, função nomeada a ordem de declaração da função neste caso NÂO IMPORTA */
function exemplo1() {
    console.log("Função nomeada");
};

exemplo1(); // chamada da função


function separador() {
    console.log("\n**********************************\n");
};

separador();

// chamada aqui dá erro, pois não pode ser feita antes da declaração exemplo2();

/* Sintaxe tradicional, função anônima Nesta sintaxe, a ordem, IMPORTA. */
const exemplo2 = function () {
    console.log("Função anônima");
};

exemplo2(); // chamada (sempre após declarar a função anônima)


separador();

// Mini-Exercícios

/* 1) Crie uma função (qualquer sintaxe) que receba dois valores númericos como parâmetros, calcule a diferença entre estes valores e retorne o resultado calculado. */

/* 2) chame esta função pelo menos duas vezes passando valores diferentes e guardando os resultados em variáveis de escopo global. */

/* 3) Apresente os resultados no console. */

// versão 2 

function calcularDiferenca( valor1, valor2 ){
    return valor1 - valor2;
}

function valores(valor1, valor2) {
    let diferenca = valor1 - valor2;
    return diferenca;
};

let resultado1 = valores(50, 250);
let resultado2 = valores(1500, -150);

console.log(resultado1);
console.log(resultado2);
console.log( calcularDiferenca(100, 50) );


separador();


/* Sintaxe moderna, função flecha/seta (arrow function) nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo3 = () => {
    console.log("Arrow funtion");
};

exemplo3(); // Chamada deve ser feita após a declaração

/* Quando a função tem SOMENTE um parâmetro, podemos remover os parênteses. E quando ela faz SOMENTE UMA ÚNICA ação (ideal), podemos remover as chaves e deixar em uma linha. */
const saudacao = nome => console.log("Olá " + nome);

saudacao("João Pedro");
saudacao("Alana");
saudacao("Gabriel");

separador();
// com retorno EXPLICÍTO
const calcularMetadeSintaxeCompleta = (valor) => {
    return valor / 2;
}

console.log(calcularMetadeSintaxeCompleta(10));

// com retorno IMPLÍCITO
const clacularMetade = valor => valor / 2;
console.log(clacularMetade(10));


separador();

// Exercício de refatoração

/* 1) Reescreva a função do exercício anterior usando a sintaxe de arrow funtion */
/* 2) Teste fazendo novas chamadas e novas saídas */

// versão 2

const calcularDiferenca_2 = (valor1, valor2) => valor1 - valor2;

let result = calcularDiferenca_2(7, 5);
console.log(result);

const calculo = (calculo1, calculo2) => {
    let resultado = calculo1 - calculo2;
    return resultado;
};

let resultadoDoCalculo1 = calculo(60, 500);
let resultadoDoCalculo2 = calculo(400, 700);

console.log(resultadoDoCalculo1);
console.log(resultadoDoCalculo2);


