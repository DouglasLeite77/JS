import { TipoTransacao } from "../enums/TipoTransacao.js";
let saldo = 3000;
const conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    registraTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;
        }
        else {
            alert("Tipo de Transação é inválido!");
            return;
        }
    }
};
export default conta;
