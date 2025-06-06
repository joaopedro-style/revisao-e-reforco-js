// 02-lidando-com-strings.js
'use strict';

const nome = "chapolin";
const sobrenome = "Colorado";
let idade = 20;
let cidade = "são Paulo";
let estado = "SP";

/* Meu nome é Chapolin colorado, tenho 20 anos e moro em São Paulo/SP. */

// CONCATENAÇÃO tradicional usa o operador
// let mensagem1 = "Meu nome é "+nome+" "+sobrenome+", tenho "+idade+" anos e moro em "+cidade+"/"+estado+".";

// usando operador += para concatenar "por pedaços/partes"
let mensagem1 = "Meu nome é "+nome;
mensagem1 += " "+sobrenome+", tenho "+idade;
mensagem1 += " anos e moro em "+cidade;
mensagem1 += "/"+estado+".";

console.log(mensagem1);


// TEMPLATE STRING/LITERAL
let mensagem2 = `Meu nome é ${nome} ${sobrenome}, tenho ${idade} anos e moro em ${cidade}/${estado}. Sou ${idade >= 18 ? 'maior' : 'menor'} de idade.`;

console.log(mensagem2);