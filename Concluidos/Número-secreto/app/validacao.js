function verificaçãoNumero(){
    const numero = +chute

    if(NumeroInteiro(numero)){
        Elementochute.innerHTML =`
        <div>Número invalido</div>
        `
        return
    }
    if(DentroDosValores(numero)){
        Elementochute.innerHTML =`
        <div>Chute invalido</div>
        <div>O número tem que esta entre ${menorvalor} e ${maiorvalor}</div>
        `
        return
    }
    if(chutemaior(numero)){
        Elementochute.innerHTML =`
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }else{
        Elementochute.innerHTML =`
        <div>Você disse:</div>
        <span class="box">${chute}</span>
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }
    if(acerto(numero)){
        document.body.innerHTML =`
        <h2>Você acertou</h2>
        <h3>O número era ${numerosecreto}</h3>
        <button id='jogar-novamente' class='btn-jogar'>Jogar novamente</button>
        `
    }
}

function DentroDosValores(numero){
    return numero > maiorvalor || numero < menorvalor
}

function NumeroInteiro(numero){
    return Number.isNaN(numero)
}

function chutemaior(numero){
    return numero < numerosecreto
}

function acerto(numero){
    return numero === numerosecreto

}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente'){
        window.location.reload()
    }
})