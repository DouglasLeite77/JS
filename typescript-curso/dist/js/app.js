import { negociacaoController } from "./controllers/negociacao-controller.js";
const form = document.querySelector(".form");
const controller = new negociacaoController();
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.adiciona();
});
