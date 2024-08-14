const maiorvalor = 1000
const menorvalor = 0
const numerosecreto = gerarNumeroAleatio(menorvalor,maiorvalor)

function gerarNumeroAleatio(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Elmaior = document.getElementById('maior-valor')
Elmaior.innerHTML = maiorvalor
const Elmenor = document.getElementById('menor-valor')
Elmenor.innerHTML = menorvalor



console.log(numerosecreto)

