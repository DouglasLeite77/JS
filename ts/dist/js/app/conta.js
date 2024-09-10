import { TipoTransacao } from "../enums/TipoTransacao.js";
let saldo = JSON.parse(localStorage.getItem("saldo")) || 0;
const transacoes = JSON.parse(localStorage.getItem("transações"), (key, value) => {
    if (key == "data") {
        return new Date(value);
    }
    return value;
}) || [];
function debitar(valor) {
    if (saldo < 0) {
        throw new Error("O valor debitado deve ser maior que zero");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
    localStorage.setItem("saldo", saldo.toString());
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("O valor depositado deve ser maior que zero");
    }
    saldo += valor;
    localStorage.setItem("saldo", saldo.toString());
}
const conta = {
    getSaldo() {
        return saldo;
    },
    getDataAcesso() {
        return new Date();
    },
    getGrupoTransacao() {
        const gruposTransacoes = [];
        const listaTransacoes = structuredClone(transacoes);
        const transacoesOrdenadas = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());
        let labelAtualGrupoTransacoes = "";
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacoes != labelGrupoTransacao) {
                labelAtualGrupoTransacoes = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelAtualGrupoTransacoes,
                    trasacoes: []
                });
            }
            gruposTransacoes.at(-1).trasacoes.push(transacao);
        }
        return gruposTransacoes;
    },
    registraTransacao(novaTransacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            depositar(novaTransacao.valor);
        }
        else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            debitar(novaTransacao.valor);
            novaTransacao.valor *= -1;
        }
        else {
            throw new Error("Tipo de transação é invalido");
        }
        transacoes.push(novaTransacao);
        console.log(this.getGrupoTransacao());
        localStorage.setItem("transações", JSON.stringify(transacoes));
    }
};
export default conta;
