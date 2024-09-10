import { TipoTransacao } from "../enums/TipoTransacao.js";

export type Transacao = {
    tipoTransacao: TipoTransacao;
    valor: number;
    data: Date;
} 