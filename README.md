# Atividades de revisão e reforço de Java Script

## sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada . obs.:
  **obrigatório** inicializar com algum valor.

---

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` associado á uma constante.
- Módulos ESM: mecanismo atual, usa `export` e `import`.

**Obs..:** recomendável criar na raíz o `package.json` contendo:

```json
{
  "type": "module"
}
```

---

## Sobre os operadores REST e SPREAD (...)

### Operador SPREAD (...)

O operador spread é usado para espalhar os elementos de arrays ou objetos. Ele copia ou combina dados de forma simples. É útil para clonar estruturas ou passar itens como argumentos de função. Exemplo: [...array] ou {...objeto}. Ele desmonta a estrutura original.

### Operador REST (...)

O operador rest é usado para juntar vários valores em um array ou objeto. Ele coleta os "restantes" dos dados. Muito usado em funções para aceitar número variável de argumentos. Exemplo: function(...args). Ele agrupa os dados em uma nova estrutura.
