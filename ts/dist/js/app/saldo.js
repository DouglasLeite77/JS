import { FormatoData } from "../enums/FormatoData.js";
import { formatarData, formatarMoeda } from "../formatters/formatters.js";
import conta from "./conta.js";
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
const elementoDataAcesso = document.querySelector(".block-saldo time");
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
atualizaSaldo();
export function atualizaSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(conta.getSaldo());
    }
}
const saldoComponent = {
    renderizarSaldo() {
        atualizaSaldo();
    }
};
export default saldoComponent;
