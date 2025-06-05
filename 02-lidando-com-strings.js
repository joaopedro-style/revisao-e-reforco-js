// 02-lidando-com-strings.js
'use strict';

const nome = "chapolin";
const sobrenome = "Colorado";
let idade = 20;
let cidade = "são Paulo";
let estado = "SP";

/* Meu nome é Chapolin colorado, tenho 20 anos e moro em São Paulo/SP. */

// CONCATENAÇÃO tradicional usa o operador
let mensagem1 = "Meu nome é "+nome+" "+sobrenome+", tenho "+idade+" anos e moro em "+cidade+"/"+estado+".";

console.log(mensagem1);

// TEMPLATE STRING/LITERAL