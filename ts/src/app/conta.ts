import { TipoTransacao } from "../enums/TipoTransacao.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { Transacao } from "../types/transacao.js";


let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;

const transacoes: Transacao[] = JSON.parse(localStorage.getItem("transações"), (key: string, value: string) => {
    if(key == "data"){
        return new Date(value)
    }
    return value
}) || []

function debitar(valor: number): void{
    if(saldo < 0){
        throw new Error("O valor debitado deve ser maior que zero") 
    }
    if(valor > saldo){
        throw new Error("Saldo insuficiente")
    }
    saldo -= valor
    localStorage.setItem("saldo", saldo.toString())
}
function depositar(valor: number): void{
    if(valor <= 0){
        throw new Error("O valor depositado deve ser maior que zero") 
    }
    saldo += valor
    localStorage.setItem("saldo", saldo.toString())
}

const conta = {
    getSaldo(){
        return saldo
    },

    getDataAcesso(): Date{
        return new Date()
    },

    getGrupoTransacao(): GrupoTransacao[]{
        const gruposTransacoes: GrupoTransacao[] = []
        const listaTransacoes: Transacao[] = structuredClone(transacoes)

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

    },

    registraTransacao(novaTransacao: Transacao): void{

        if ( novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor)
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor)
            novaTransacao.valor *= -1
        } else {
            throw new Error("Tipo de transação é invalido") 
        }

        transacoes.push(novaTransacao)
        console.log(this.getGrupoTransacao())
        
        localStorage.setItem("transações", JSON.stringify(transacoes))
    }
}



export default conta