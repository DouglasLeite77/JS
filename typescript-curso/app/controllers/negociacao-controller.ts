import { diasDaSemana } from "../enums/dias-da-semana.js"
import { Negociacoes } from "../models/negociacoes.js"
import { negociacao } from "../models/negociação.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class negociacaoController{
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociascoesView')
    private mensagemview = new MensagemView('#mensagemView')

    constructor(){
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
        this.negociacoesView.update(this.negociacoes)
    }

    adiciona(): void{
        const Negociacao = this.criaNegociação()
        if(!this.ehDiaUtil(Negociacao.data)){
            this.mensagemview.update("Apenas negociações em dias úteis")
            return
        }
        this.negociacoes.adiciona(Negociacao);
        this.negociacoesView.update(this.negociacoes)
        this.mensagemview.update("Essa negociação foi adicionada com sucesso")
        this.limparForm()
        console.log(Negociacao.data.getDay())
        }
    private ehDiaUtil(data: Date){
        return data.getDay() > diasDaSemana.DOMINGO && data.getDay() < diasDaSemana.SABADO
    }   

    private criaNegociação(): negociacao{
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ","))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)
        return new negociacao(data, quantidade, valor)
    }

    private limparForm(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

}