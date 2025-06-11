"use strict";
// 09-desestrururacao.js

import { separador } from "./modulos-esm/exemplos.js";

// Desestruturando arrays
const clientes = ["João", "Pedro", "José"];

const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

// Desestruturando alguns valores (omitimos Curitiba e Belo Horizonte)
const [paraiba, amazonas, , bahia] = capitais;
console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JS"],
  ["PHP", "Node.js", "SQL", "Python", "ASP.Net"],
];

console.log(linguagens);

// console.log(linguagens[0][2]); // JS
// console.log(linguagens[1][3]); // Python

const [frontEnd, backEnd] = linguagens;

console.log(frontEnd[2]); // JS
console.log(backEnd[3]); // Python

separador();

// Desestruturação aninhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js);
console.log(python);

separador();

/* Mini exercício */
const diversos = [
  "JavaScript - Reforço",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

// Faça a desestruturação dos elementos deste array
// Teste usando o console.log para exibir cada elemento extraído

const [texto, [teclado, monitor, mouse], numero, converterMaiuscula] = diversos;
console.log(texto);
console.log(teclado);
console.log(monitor);
console.log(mouse);
console.log(numero);
console.log(converterMaiuscula("João"));
