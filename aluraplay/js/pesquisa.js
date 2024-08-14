const inputPesquisa = document.querySelector("#pesquisar")
const btnPesquisar = document.querySelector(".pesquisar__botao")

async function pesquisarVideo(evento) {
    evento.preventDefault()
    const texto = inputPesquisa.value
    const pesquisa = await fetch(`http://localhost:3000/videos?q=${texto}`)
    const videos = await pesquisa.json()
    ul.innerHTML = ""
    exibirVideos(videos)
}

btnPesquisar.addEventListener("click", evento => pesquisarVideo(evento))
