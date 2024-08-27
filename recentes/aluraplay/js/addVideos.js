const btnSubmit = document.querySelector("#submit")


async function criaVideo(titulo,url,descricao,imagem){
    const api = fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url,
            descricao: `${descricao} mil vizualizações`,
            imagem: imagem,
        })
    })
}

function enviarVideo(evento) {
    evento.preventDefault()
    const url = document.getElementById("url")
    const titulo = document.getElementById("titulo")
    const imagem = document.getElementById("imagem")
    const descricao = Math.floor(Math.random()*10).toString();
    criaVideo(titulo.value,url.value,descricao,imagem.value)
    window.location.href = "../pages/envio-concluido.html"
}

btnSubmit.addEventListener("click", enviarVideo)
