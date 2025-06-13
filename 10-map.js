"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";

/* map (mapear, mapeamento - transformar/gerar em outra coisa) passa por elementos de um array e realiza operações em cada um deles através de uma função callback, gerando um novo array de elementos transformados. */

// Exemplo 1
const numeros = [10, 20, 5, 12.5, 66, 50, 1000];
console.log(numeros);

const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados);

separador();

/* Mini-exercício:
1) Crie um array com 5 textos escritos em letras MAIÚSCULAS
2) Mostre no console este array
3) Usando o map, acesse e transforme todos eles em letras minúsculas (tolowerCase) 
4) Guarde o resultado do map em uma nova constante 
5) Mostre no console este novo array */

const pecas = ["MONITOR", "TECLADO", "MOUSE", "GABINETE", "FONE"];
console.log(pecas);

const converterMinuscula = pecas.map((itens) => itens.toLowerCase());
console.log(converterMinuscula);

separador();

console.log("==Lista Completa de Cursos ==");
console.log(cursos);
console.log("=========================================");

separador();

// Exemplo 2: gerar um novo array contendo somente os títulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);

separador();

/* Exercícios 
Use o map para gerar um novo array contendo SOMENTE os preços dos cursos calculados com um desconto de 10%. */

const precos = cursos.map((curso) => curso.preco - curso.preco * 0.1);
console.log(precos);

separador();

// Exemplo 3: gerar um novo array COMPLETO (ou seja, com os objetos completos) mas com os preços atualizados com o desconto
const cursosComDesconto = cursos.map((cursos) => {
  return {
    ...cursos, // spread das propriedades do curso (copiando-as pra cá)
    preco: cursos.preco - cursos.preco * 0.1, // mas o preco é atualizado
  };
});

console.log(cursosComDesconto);

separador();

/* EXERCÌCIO
Gere uma nova lista de cursos contendo apenas os titulos e as categorias. */

//versão 1
// const titulosECategorias = cursos.map((cursos) => {
//   return { titulo: cursos.titulo, categoria: cursos.categoria };
// });

// versão 2: com retorno implícito (atenção: use parênteses no retorno do objeto)
const titulosECategorias = cursos.map((cursos) => ({
  titulo: cursos.titulo,
  categoria: cursos.categoria,
}));

console.log(titulosECategorias);
