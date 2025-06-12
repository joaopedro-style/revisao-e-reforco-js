"use strict";

import { separador } from "./modulos-esm/exemplos.js";

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
