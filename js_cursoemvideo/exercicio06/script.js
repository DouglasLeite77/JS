
let res = document.querySelector("div#res")
let valores = []
let lista = document.querySelector("textarea#lista")

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }
}

function islista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}

function adicionar(){
    let num = document.getElementById("numero")
    if(isnumero(num.value) && !islista(num.value, valores)){
        window.alert('certo!')
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
}