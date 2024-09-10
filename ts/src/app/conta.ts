import { TipoTransacao } from "../enums/TipoTransacao.js";
import { Transacao } from "../types/transacao.js";


let saldo = 3000;

const conta = {
    getSaldo(){
        return saldo
    },

    getDataAcesso(): Date{
        return new Date()
    },

    registraTransacao(novaTransacao: Transacao): void{

        if ( novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        } else {
            alert("Tipo de Transação é inválido!");
            return; 
        }
    }
}

export default conta