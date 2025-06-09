'use strict';

export const marca = nomeDamarca => nomeDamarca.toUpperCase();

export const carro = nomeDoCarro => nomeDoCarro.toLowerCase();

export const formatarPreco = valor => {
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