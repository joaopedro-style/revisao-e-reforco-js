'use strict';
// 05-usando-modulos-esm.js

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

// Importação de mútiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

// Uso de um 'alias/apelido' para evitar conflito de nomes
import { pessoa, livro, alunos as personagens } from './modulos-esm/dados.js';

saudacao("Fulano de Tal");
console.log(clientes);

separador();

// Acessando recursos do import de alunos
console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
    console.log(aluno);
}


separador();

// Acessando recursos do módulo 'dados.js'
console.log(pessoa.nome);
console.log(livro);
console.log(personagens); // lembre-se: personagens é um apelido para alunos

separador();

/* Exercícios
1) crie um arquivo chamado "funcoes.js" dentro da pasta "modulos-esm"
2) Dentro dele, programe 3 funções (USANDO ARROW FUNCTION):
    - Converter caracteres para MAIÚSCULO
    - Converter caracteres para MINÚSCULO
    - Formatar valor em moeda brasileira (real)
3) Export-as como módulos
4) No arquivo 05, importe e utilize estas funções passando textos e valores para testes. */

import { marcas, carros, preco, formatarMoeda } from "./modulos-esm/funcoes.js";

console.log(marcas("nike"));
console.log(carros("Ferrari"));
console.log(preco(1700));

// versão 2 do formato valor em moeda

console.log(formatarMoeda(3000, 'USD', 'en'));
console.log(formatarMoeda(5000, 'EUR', 'fr'));