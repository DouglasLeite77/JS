function comprar(){
    let tipoc = document.getElementById("tipo-ingresso").value

    if(tipoc == "pista"){
        comprarpista()
    }else if(tipoc == "superior"){
        comprarsuperior()
    }else if (tipoc == "inferior"){
        comprarinferior()
    }
}

function comprarpista(){
    let pista = parseInt(document.getElementById('qtd-pista').textContent)
    let quantidade = parseInt(document.getElementById('qtd').value)
    if(quantidade > pista){
        alert("Quantidade insuficiente")
    }else{
        pista = pista - quantidade
        document.getElementById('qtd-pista').textContent = pista
        alert("Comprar realizada com sucesso!")
    }
}
function comprarsuperior(){
    let superior = parseInt(document.getElementById('qtd-superior').textContent)
    let quantidade = parseInt(document.getElementById('qtd').value)
    if(quantidade > superior){
        alert("Quantidade insuficiente")
    }else{
    superior = superior - quantidade
    document.getElementById('qtd-superior').textContent = superior
    alert("Comprar realizada com sucesso!")
}}
function comprarinferior(){
    let inferior = parseInt(document.getElementById('qtd-inferior').textContent)
    let quantidade = parseInt(document.getElementById('qtd').value)
    if(quantidade > inferior){
        alert("Quantidade insuficiente")
    }else{
    inferior = inferior - quantidade
    document.getElementById('qtd-inferior').textContent = inferior
    alert("Comprar realizada com sucesso!")
}
}