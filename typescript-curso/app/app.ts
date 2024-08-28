import { negociacaoController } from "./controllers/negociacao-controller.js"
import { negociacao } from "./models/negociação.js"

const form = document.querySelector(".form")

const controller = new negociacaoController()

form.addEventListener("submit", event => {
    event.preventDefault()
    controller.adiciona()
})