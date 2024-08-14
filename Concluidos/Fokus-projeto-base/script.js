    const html = document.querySelector('html')
const focobt = document.querySelector('.app__card-button--foco')
const curtobt = document.querySelector('.app__card-button--curto')
const longobt = document.querySelector('.app__card-button--longo')
const img = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botao = document.querySelectorAll('.app__card-button') 
const startPauseBt = document.querySelector('#start-pause')
const icon = document.querySelector('.app__card-primary-butto-icon')
const timer = document.querySelector('#timer')
const musicabt = document.querySelector('#alternar-musica')
const musica = new Audio ('sons/luna-rise-part-one.mp3')
const play = new Audio ('sons/play.wav')
const pause = new Audio ('sons/pause.mp3')
const beep = new Audio ('sons/beep.mp3')
musica.loop = true

let comecaP = document.querySelector('.começar')
let = tempoDecorridoEmSegundos = 1500
let intervaloId = null

musicabt.addEventListener('change', () => {
    if(musica.paused){
        musica.play()
    }else{
        musica.pause()
    }
})

focobt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 1
    alterarcontexto('foco')
    focobt.classList.add('active')
})
curtobt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 300
    alterarcontexto('descanso-curto')
    curtobt.classList.add('active')
})
longobt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900
    alterarcontexto('descanso-longo')
    longobt.classList.add('active')
})  

function alterarcontexto(contexto){
    mostrartempo()
    botao.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    img.setAttribute('src' , `./imagens/${contexto}.png`)


    switch (contexto) {
        case 'foco':
            titulo.innerHTML ='Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>'
            break;
        case 'descanso-curto':
                titulo.innerHTML = 'Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta!.</strong>'
            break;
        case 'descanso-longo': 
                titulo.innerHTML = 'Hora de voltar à superfície.<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>'
            break
        default:
            break;
    }
}
const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        //beep.play()
        alert('Tempo finalizado')
        const focoativo = html.getAttribute('data-contexto') == 'foco'
        if (focoativo) {
            const evento = new CustomEvent('focoFinalizado')
            document.dispatchEvent(evento)
        }
        zerar()
        comecaP.textContent = 'Começar'
        icon.setAttribute('src', './imagens/play_arrow.png')
        return
    }
    tempoDecorridoEmSegundos -= 1
    mostrartempo()
}
startPauseBt.addEventListener('click', iniciar)

function iniciar() {
    if(intervaloId){
        pause.play()
        icon.setAttribute('src', './imagens/play_arrow.png')
        comecaP.textContent = 'Retomar'
        zerar()
        return
    }
    intervaloId = setInterval(contagemRegressiva, 1000)
    play.play()
    icon.setAttribute('src', './imagens/pause.png')
    comecaP.textContent = 'Pausar'
}

function zerar(){
    clearInterval(intervaloId)
    intervaloId = null
}

function mostrartempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoformatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    timer.innerHTML = `${tempoformatado}`
}
mostrartempo()