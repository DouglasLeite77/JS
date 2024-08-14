const Elementochute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = (e.results[0][0].transcript)
    if(chute === "game over"){
        document.body.innerHTML =`
        <h2>O jogo terminou</h2>
        <h3>O número era ${numerosecreto}</h3>
        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    }
    verificaçãoNumero(chute)
}

recognition.addEventListener(('end'), () => recognition.start())