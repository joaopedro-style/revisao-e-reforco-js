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