import { imprivel } from "../utils/imprivel.js";
import { negociacao } from "./negociação.js";

export class Negociacoes implements imprivel{
    private negociacoes: negociacao[] = []

    adiciona(negociacao: negociacao) {
        this.negociacoes.push(negociacao)
    }

    lista(): readonly negociacao[]{
        return this.negociacoes
    }
    paraTexto(): string{
        return JSON.stringify(this.negociacoes, null, 2)
    }
}