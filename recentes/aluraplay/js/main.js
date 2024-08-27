const api = "http://localhost:3000/videos"
const ul = document.querySelector(".videos__container")
let videos = []

async function buscarVideos() {
    const buscar = await fetch(api)
    videos = await buscar.json()
    exibirVideos(videos)
}

buscarVideos()

async function exibirVideos(videos) {

    videos.forEach(video => {
        ul.innerHTML += `
        <li class="videos__item">
            <iframe width="100%" height="72%" src="${video.url}"
                title="${video.titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${video.imagem}" alt="logo canal alura">
                <h3>${video.titulo}</h3>
                <p>${video.descricao}</p>
            </div>
        </li>`
    });
}



