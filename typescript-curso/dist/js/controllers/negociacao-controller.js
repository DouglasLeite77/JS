import { diasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { negociacao } from "../models/negociação.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociascoesView');
        this.mensagemview = new MensagemView('#mensagemView');
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const Negociacao = negociacao.criarNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(Negociacao.data)) {
            this.mensagemview.update("Apenas negociações em dias úteis");
            return;
        }
        this.negociacoes.adiciona(Negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemview.update("Essa negociação foi adicionada com sucesso");
        this.limparForm();
        console.log(Negociacao.data.getDay());
    }
    ehDiaUtil(data) {
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO;
    }
    limparForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
