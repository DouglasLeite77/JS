function enviar() {
    var nasc = window.document.getElementById('nas').value

    if (nasc === 'brasil') {
        window.document.getElementById('res').innerHTML = 'Você é brasileiro';
    } else {
        window.document.getElementById('res').innerHTML = 'Você é estrangeiro';
    }
}

function enviar(){
    var nasc = window.document.getElementById('nas').value

    switch(nasc){
        case 'brasil': window.document.getElementById('res').innerHTML = 'Você é brasileiro'
        break
        case 'chile' : window.document.getElementById('res').innerHTML = 'Você é Chileno'
        break
        default: window.document.getElementById('res').innerHTML = 'pais não identificado'
    }
}

