import { validaDebito } from "../decorators/validaDebito.js"
import { validaDeposito } from "../decorators/validaDeposito.js"
import { TipoTransacao } from "../enums/TipoTransacao.js"
import { Armazenador } from "../types/Armazenador.js"
import { GrupoTransacao } from "../types/GrupoTransacao.js"
import { Transacao } from "../types/transacao.js"
import saldo from "./saldo.js"

export class Conta {
    nome: string
    saldo: number = Armazenador.obter<number>("saldo") || 0
    transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacao"), (key: string, value: string) =>{
        if(key == "data"){
            return new Date(value)
        }
        return value
    }) || []

    constructor(nome: string){
        this.nome
    }

    @validaDebito
    debitar(valor: number): void{
        this.saldo -= valor
        Armazenador.salvar("saldo", this.saldo.toString())
    }
    @validaDeposito
    depositar(valor: number): void{
        this.saldo += valor
        Armazenador.salvar("saldo", saldo.toString())
    }
    
    getSaldo(){
        return saldo
    }

    getDataAcesso(): Date{
        return new Date()
    }

    getGrupoTransacao(): GrupoTransacao[]{
        const gruposTransacoes: GrupoTransacao[] = []
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes)

        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime())
        let labelAtualGrupoTransacoes: string = ""

        for (let transacao of transacoesOrdenadas){
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", {month: "long", year: "numeric"})
            if(labelAtualGrupoTransacoes != labelGrupoTransacao){
                labelAtualGrupoTransacoes = labelGrupoTransacao
                gruposTransacoes.push({
                    label: labelAtualGrupoTransacoes,
                    trasacoes: []
                })
            }
            gruposTransacoes.at(-1).trasacoes.push(transacao)
        }
        return gruposTransacoes

    }
    registraTransacao(novaTransacao: Transacao): void{

        if ( novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            this.depositar(novaTransacao.valor)
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            this.debitar(novaTransacao.valor)
            novaTransacao.valor *= -1
        } else {
            throw new Error("Tipo de transação é invalido") 
        }

        this.transacoes.push(novaTransacao)
        console.log(this.getGrupoTransacao())
        Armazenador.salvar("transações", JSON.stringify(this.transacoes))
    }

}

export class contaPremium extends Conta{

    registraTransacao(novaTransacao: Transacao): void{
        if(novaTransacao.tipoTransacao === TipoTransacao.DEPOSITO){
            novaTransacao.valor += 0.5
        }
        super.registraTransacao(novaTransacao)
    }
}

const conta = new Conta("Joana da Silva")

export default conta