import { negociacao } from "./negociação.js";

export class Negociacoes {
    private negociacoes: negociacao[] = []

    adiciona(negociacao: negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): readonly negociacao[]{
        return this.negociacoes
    }
}