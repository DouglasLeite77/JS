var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { tempoDeExecucao } from "../decorators/Tempo-de-execucao.js";
import { diasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/negociacoes.js";
import { negociacao } from "../models/negociação.js";
import { negociacoesService } from "../services/negociacoes-service.js";
import { imprimir } from "../utils/imprimir.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociascoesView');
        this.mensagemview = new MensagemView('#mensagemView');
        this.negociacaoService = new negociacoesService();
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
        imprimir(Negociacao, this.negociacoes);
        this.limparForm();
    }
    ehDiaUtil(data) {
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO;
    }
    importaDados() {
        this.negociacaoService.obterNegociacoes()
            .then(negociacaoDeHoje => {
            return negociacaoDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes.lista().some(negociacao => negociacao.ehIgual(negociacaoDeHoje));
            });
        })
            .then(negociacaoDeHoje => {
            for (let negociacao of negociacaoDeHoje) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    limparForm() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
}
__decorate([
    domInjector('#data')
], negociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], negociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], negociacaoController.prototype, "inputValor", void 0);
__decorate([
    tempoDeExecucao(),
    inspect
], negociacaoController.prototype, "adiciona", null);
