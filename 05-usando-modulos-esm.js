'use strict';
// 05-usando-modulos-esm.js

// Importação de recurso padrão (default)
import alunos from './modulos-esm/alunos.js';

// Importação de mútiplos recursos/módulos usando ESM
import { saudacao, clientes, separador } from './modulos-esm/exemplos.js';

saudacao("Fulano de Tal");
console.log(clientes);

separador();

// Acessando recursos do import de alunos
console.log(alunos[1]);
console.log(alunos);

for(const aluno of alunos){
    console.log(aluno);
}