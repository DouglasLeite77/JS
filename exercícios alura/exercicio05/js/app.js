let amigos = []
function adicionar(){
    let nomeamigo = document.getElementById('nome-amigo')
    let lamigos = document.getElementById('lista-amigos')
    if(nomeamigo.value == ""){
        alert("Digite o nome do seu amigo")
        return
    }
    if(amigos.includes(nomeamigo.value)){
        alert('nome ja foi adicionado')
        nomeamigo.value = ""
        return
    }
        amigos.push(nomeamigo.value)
        if (lamigos.textContent == ""){
            lamigos.textContent = nomeamigo.value
        }else {
            lamigos.textContent = lamigos.textContent + ", " + nomeamigo.value
        }
    
    nomeamigo.value = ""
}

function sortear(){
    if(amigos.length < 4){
        alert("Adicione pelo menos 4 amigos")
        return
    }
    embaralha(amigos)
    let sorteio = document.getElementById('lista-sorteio')

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + '<br>'
        }else{
        sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    amigos = []
    document.getElementById('lista-amigos').innerHTML = ""
    document.getElementById('lista-sorteio').innerHTML = ""
}