const containerVideos = document.querySelector(".videos__container")

async function buscarEMostrarVideos(){
    try{
        const buscar = await fetch("http://localhost:3000/videos")
        const videos = await buscar.json()
        if(videos.categoria == ""){
            throw new Error('Video sem categoria')
        }
        videos.forEach(video => {
            containerVideos.innerHTML += `
            <li class="videos__item">
            <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
            <img class="img-canal" src = "${video.imagem}" alt="Logo do Canal">
            <h3 class="titulo-video">${video.titulo}</h3>
            <p class="titulo-canal">${video.descricao}</p>
            <p class="categoria" hidden>${video.categoria}</p>
            </div>
            
            </li>
            `
        })
    }catch(error){
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
    }
}

buscarEMostrarVideos()

const barraDePesquisa = document.querySelector(".input__search")
barraDePesquisa.addEventListener("input", filtrarVideos)

function filtrarVideos(){
    const videos = document.querySelectorAll(".videos__item")

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase()
            let valorFiltro = barraDePesquisa.value.toLowerCase()

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        }
    }else{
        videos.forEach(video =>{
        video.style.display = "block"
        })
    }
}

const btnCategorias = document.querySelectorAll(".categoria__item")

btnCategorias.forEach(btn =>{
    let name = btn.getAttribute("name")
    btn.addEventListener("click", () => filtrarCategoria(name))
})

function filtrarCategoria(name){
    const videos = document.querySelectorAll(".videos__item")

    videos.forEach(video =>{
        let categoria = video.querySelector(".categoria").textContent.toLowerCase()
        let filtro = name.toLowerCase()

        if(!categoria.includes(filtro) && filtro != "tudo"){
            video.style.display = "none";
        }else{
            video.style.display = "block";
        }
    })
}