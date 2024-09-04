import { negociacao } from "../models/negociação.js";
export class negociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados) => {
            return dados.map(dadosDeHoje => {
                return new negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante);
            });
        });
    }
}
