const api = "http://localhost:3000/pensamentos"
const formulario = document.querySelector("#pensamento-form")

async function buscaApi() {
    const buscarApi = await fetch(api)
    const pensamentos = await buscarApi.json()
    mostrarPensamentos(pensamentos)
}
buscaApi()

function mostrarPensamentos(pensamentos){
    const ul = document.querySelector("#lista-pensamentos")
    pensamentos.forEach(pensamento => {
        ul.innerHTML += `
          <li class="li-pensamento" data-id="${pensamento.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
          <div class="pensamento-conteudo">${pensamento.conteudo}</div>
          <div class="pensamento-autoria">${pensamento.autoria}</div>
          </li>
        `
    });
}

async function salvarPensamento(pensamentos) {
    const buscarApi = await fetch(api, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(pensamentos)
    })
}
formulario.addEventListener("submit", enviarDados)

async function enviarDados(event){
    event.preventDefault()
    const buscarApi = await fetch(api)
    const pensamentos = await buscarApi.json()

    const conteudo = document.querySelector("#pensamento-conteudo").value
    const id = document.querySelector("#pensamento-id").value
    const autoria = document.querySelector("#pensamento-autoria").value

    await salvarPensamento({ conteudo, autoria});
    mostrarPensamentos()
}


async function buscaPensamento(id) {
    const buscarpensamento = await fetch(`http://localhost:3000/pensamentos/${id}`)
    const pensamentos = await buscarpensamento.json()

    let conteudo = document.querySelector("#pensamento-conteudo")
    let autoria = document.querySelector("#pensamento-autoria")
    let idPensamento = document.querySelector("#pensamento-id")
    idPensamento.value = id
    autoria.value = pensamentos.autoria
    conteudo.value = pensamentos.conteudo
}
buscaPensamento("9bf2")

async function editarPensamento(pensamento) {
    const buscarApi = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(pensamento)
    })
}

const btnCacenlar = document.querySelector("#botao-cancelar")

btnCacenlar.addEventListener('click', () => {
    let conteudo = document.querySelector("#pensamento-conteudo")
    let autoria = document.querySelector("#pensamento-autoria")
    autoria.value = ''
    conteudo.value = ''
})


