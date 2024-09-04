import { negociacaoController } from "./controllers/negociacao-controller.js"

const form = document.querySelector(".form")
const botaoImportar = document.querySelector('#botao-importa')

const controller = new negociacaoController()

if(form){
    form.addEventListener("submit", event => {
        event.preventDefault()
        controller.adiciona()
    })
}else {
    throw Error("Não foi possível inicializar a aplicação porque o form não foi encontrado")
}

if(botaoImportar){
    botaoImportar.addEventListener("click", () => {
        controller.importaDados()
    })
}else {
    throw Error("Não foi possível inicializar a aplicação porque o form não foi encontrado")
}
