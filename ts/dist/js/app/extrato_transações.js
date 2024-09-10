import { FormatoData } from "../enums/FormatoData.js";
import { formatarData, formatarMoeda } from "../formatters/formatters.js";
import conta from "./conta.js";
const elementoHTML = document.querySelector(".extrato .registro-transacoes");
renderizarExtrato();
function renderizarExtrato() {
    const gruposTransacoes = conta.getGrupoTransacao();
    elementoHTML.innerHTML = "";
    let htmlRegistro = "";
    for (let grupotransacao of gruposTransacoes) {
        let htmltransacao = "";
        for (let transacao of grupotransacao.trasacoes) {
            htmltransacao += `
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">R$ ${formatarMoeda(transacao.valor)}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        }
        htmlRegistro += `
            <div class="transacoes-group">
                <strong class="mes-group">${grupotransacao.label}</strong>
                ${htmltransacao}
            </div>
        `;
    }
    if (htmlRegistro === "") {
        htmlRegistro = "<div>Não há transações registradas.</div>";
    }
    elementoHTML.innerHTML = htmlRegistro;
}
const ExtratoComponent = {
    atualizar() {
        renderizarExtrato();
    }
};
export default ExtratoComponent;
