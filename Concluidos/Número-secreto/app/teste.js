const Elementochute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition()
recognition.lang = 'pt-br'
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = (e.results[0][0].transcript)
    document.body.innerHTML = `<h2>${chute}</h2>`
}

recognition.addEventListener(('end'), () => recognition.start())