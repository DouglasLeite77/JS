import { domInjector } from "../decorators/dom-injector.js"
import { inspect } from "../decorators/inspect.js"
import { tempoDeExecucao } from "../decorators/Tempo-de-execucao.js"
import { diasDaSemana } from "../enums/dias-da-semana.js"
import { Negociacoes } from "../models/negociacoes.js"
import { negociacao } from "../models/negociação.js"
import { negociacoesService } from "../services/negociacoes-service.js"
import { imprimir } from "../utils/imprimir.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"


export class negociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement
    @domInjector("#valor")
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociascoesView')
    private mensagemview = new MensagemView('#mensagemView')
    private negociacaoService = new negociacoesService()

    constructor(){
        this.negociacoesView.update(this.negociacoes)
    }

    @tempoDeExecucao()
    @inspect
    adiciona(): void{
        const Negociacao = negociacao.criarNegociacao(this.inputData.value, this.inputQuantidade.value, this.inputValor.value)
        if(!this.ehDiaUtil(Negociacao.data)){
            this.mensagemview.update("Apenas negociações em dias úteis")
            return
        }
        this.negociacoes.adiciona(Negociacao);
        this.negociacoesView.update(this.negociacoes)
        this.mensagemview.update("Essa negociação foi adicionada com sucesso")
        imprimir(Negociacao, this.negociacoes)
        this.limparForm()
        }
    private ehDiaUtil(data: Date){
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO
    }   
    importaDados(): void{
        this.negociacaoService.obterNegociacoes()
        .then(negociacaoDeHoje => {
            return negociacaoDeHoje.filter(negociacaoDeHoje =>{
                return !this.negociacoes.lista().some(negociacao => negociacao.ehIgual(negociacaoDeHoje))
            })
        })
        .then(negociacaoDeHoje => {
            for(let negociacao of negociacaoDeHoje){
                this.negociacoes.adiciona(negociacao)
            }
            this.negociacoesView.update(this.negociacoes)
        })
    }

    private limparForm(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

}