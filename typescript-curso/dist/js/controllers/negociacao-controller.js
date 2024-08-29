import { Negociacoes } from "../models/negociacoes.js";
import { negociacao } from "../models/negociação.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesViwe = new NegociacoesView('#negociascoesView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesViwe.update(this.negociacoes);
    }
    adiciona() {
        const Negociacao = this.criaNegociação();
        this.negociacoes.adiciona(Negociacao);
        this.negociacoesViwe.update(this.negociacoes);
        this.limparForm();
    }
    criaNegociação() {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new negociacao(data, quantidade, valor);
    }
    limparForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
