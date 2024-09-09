import { imprivel } from "./imprivel.js";

export function imprimir(...objetos: imprivel[]){
    for(let objeto of objetos){
        console.log(objeto.paraTexto())
    }
}