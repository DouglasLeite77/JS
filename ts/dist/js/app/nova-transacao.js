import conta from "./conta.js";
import ExtratoComponent from "./extrato_transações.js";
import saldoComponent from "./saldo.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos da transação!");
            return;
        }
        const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputData = elementoFormulario.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + " 00:00:00");
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data
        };
        conta.registraTransacao(novaTransacao);
        saldoComponent.renderizarSaldo();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
