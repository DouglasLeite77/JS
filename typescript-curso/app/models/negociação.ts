export class negociacao {


    constructor(
        public readonly _data: Date,
        public readonly quantidade: number, 
        public readonly valor: number
    ){}
    
    get volume(): number{
        return this.valor * this.quantidade
    }
    get data(): Date{
        const data = new Date(this._data.getTime())
        return data
    }

    public static criarNegociacao(dataString: string, quantidadeString: string, valorString: string): negociacao{
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","))
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)
        return new negociacao(data, quantidade, valor)
    }
}