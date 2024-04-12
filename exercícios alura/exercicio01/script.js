function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let valores = [];
    let numero;

    for(let i = 0; i < quantidade; i++){
        numero = getrandom(de, ate);

        while(valores.includes(numero)){
            numero = getrandom(de, ate)
        }

        valores.push(numero)
    } 

    let res = document.getElementById("resultado")
    res.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${valores}</label>`
    alterbutton()
}

function getrandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterbutton(){
    let button02 = document.getElementById("btn-reiniciar")
    if(button02.classList.contains("container__botao-desabilitado")){
        button02.classList.remove("container__botao-desabilitado")
        button02.classList.add("container__botao")
    }else{
        button02.classList.remove("container__botao")
        button02.classList.add("container__botao-desabilitado")
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = ""
    document.getElementById('ate').value = ""
    document.getElementById('de').value = ""
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterbutton()
}