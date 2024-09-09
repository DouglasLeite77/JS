import { negociacaoDoDia } from "../interfaces/negociacao-do-dia.js";
import { negociacao } from "../models/negociação.js";

export class negociacoesService{
    public obterNegociacoes(): Promise<negociacao[]>{
        return fetch("http://localhost:8080/dados")
        .then(res => res.json())
        .then((dados: negociacaoDoDia[]) => {
            return dados.map(dadosDeHoje => {
                return new negociacao(new Date(), dadosDeHoje.vezes, dadosDeHoje.montante)
            })
        }) 
    }
}