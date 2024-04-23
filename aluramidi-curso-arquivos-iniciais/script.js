function tocasom(idelementoaudio){
    const elemento = document.querySelector(idelementoaudio);


    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listadeteclas = document.querySelectorAll('.tecla');

let contador = 0;


for (contador = 0 ;contador < listadeteclas.length; contador++) {

    const tecla = listadeteclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocasom(idAudio);
    }

    tecla.onkeydown = function (e){
        console.log(e.code)
        if(e.code == 'Space'  || e.code == 'Enter'){
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function (){
            tecla.classList.remove('ativa')
        }

}