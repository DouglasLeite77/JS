import { negociacaoController } from "./controllers/negociacao-controller.js"

const form = document.querySelector(".form")

const controller = new negociacaoController()

if(form){
    form.addEventListener("submit", event => {
        event.preventDefault()
        controller.adiciona()
    })
}else {
    throw Error("Não foi possível inicializar a aplicação porque o form não foi encontrado")
}