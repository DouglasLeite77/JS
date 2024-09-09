export class negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    paraTexto() {
        return `
        data: ${this.data}
        quantidade: ${this.quantidade}
        valor: ${this.valor}
        `;
    }
    ehIgual(negociacao) {
        return this.data.getDate() === negociacao.data.getDate() && this.data.getMonth() === negociacao.data.getMonth() && this.data.getFullYear() === negociacao.data.getFullYear();
    }
    static criarNegociacao(dataString, quantidadeString, valorString) {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new negociacao(data, quantidade, valor);
    }
}
