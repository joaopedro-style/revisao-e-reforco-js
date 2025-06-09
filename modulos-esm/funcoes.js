'use strict';

export const marcas = marca => marca.toUpperCase();

export const carros = tipo => tipo.toLowerCase();

export const preco = valor => {
    return valor.toLocaleString(
        "pt-BR", {
            style: "currency",
            currency: "BRL"
        }
    )
};

// versão 2 do formato valor em moeda

export const formatarMoeda = (valor, moeda = 'BRL', localidade = 'pt-BR') => {
    return valor.toLocaleString(
        localidade,
        {
            style: "currency",
            currency: moeda
        }
    )
};