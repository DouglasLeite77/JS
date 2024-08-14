const btnFoco = document.querySelector(".app__card-button--foco")
const btnCurto = document.querySelector(".app__card-button--curto")
const btnLongo = document.querySelector(".app__card-button--longo")
const html = document.querySelector("html")
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')
const btnStartPause = document.querySelector('#start-pause')
const btnMusica = document.querySelector('#alternar-musica')
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const iniciarOuPausarImg = document.querySelector('#start-pause img')
const tempoNaTela = document.querySelector('#timer')

const musica = new Audio('./sons/luna-rise-part-one.mp3')
const iniciando = new Audio('./sons/play.wav')
const pausar = new Audio('./sons/pause.mp3')
const finalizado = new Audio ('./sons/beep.mp3')

let Tempo = 1500
let intervalo = null
musica.loop = true

btnMusica.addEventListener('change', () =>{
    if(musica.paused){
        musica.play()
    }else {
        musica.pause()
    }
})

btnFoco.addEventListener('click', () => {
    Tempo = 1
    alterarContexto('foco')
    btnFoco.classList.add('active')
})
btnCurto.addEventListener('click', () => {
    Tempo = 300
    alterarContexto('descanso-curto')
    btnCurto.classList.add('active')
})
btnLongo.addEventListener('click', () => {
    Tempo = 900
    alterarContexto('descanso-longo')
    btnLongo.classList.add('active')
})


function alterarContexto(contexto){
    mostrarTempo()
    html.setAttribute("data-contexto", `${contexto}`)
    banner.setAttribute('src', `./imagens/${contexto}.png`)

    botoes.forEach(function (bedo) {
        bedo.classList.remove('active')
    })

    switch (contexto){
    case 'foco':
        titulo.innerHTML ='Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>'
        break;
    case 'descanso-curto':
            titulo.innerHTML = 'Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta!.</strong>'
        break;
    case 'descanso-longo': 
            titulo.innerHTML = 'Hora de voltar à superfície.<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>'
        break;
    default:
        break;
    } 
}

const contagemRegressiva = () => {
    if(Tempo <= 0){
        finalizado.play()
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        zerar()
        return
    }
    Tempo -= 1
    mostrarTempo()
}

btnStartPause.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if(intervalo){
        zerar()
        return
    }
    intervalo = setInterval(contagemRegressiva, 1000)
    iniciando.play()
    iniciarOuPausarBt.textContent = "Pausar"
    iniciarOuPausarImg.setAttribute('src', "./imagens/pause.png")
}

function zerar(){
    clearInterval(intervalo)
    intervalo = null
    pausar.play()
    iniciarOuPausarBt.textContent = "Começar"
    iniciarOuPausarImg.setAttribute('src', "./imagens/play_arrow.png")
}

function mostrarTempo() {
    const timer = new Date(Tempo * 1000)
    const timerFormatado = timer.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${timerFormatado}`
}
mostrarTempo()
