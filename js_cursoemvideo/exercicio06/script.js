let valores = []
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
    let res = document.querySelector("div#res")
    let lista = document.querySelector("select#lista")
    if(isnumero(num.value) && !islista(num.value, valores)){
        valores.push(Number(num.value))
        let resultado = document.createElement('option')
        resultado.innerHTML = `Valor ${num.value} adicionado`
        lista.appendChild(resultado)
        res.innerHTML = ""
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ""
    num.focus()
}
function enviar(){
    let num = document.getElementById("numero")
    let res = document.querySelector("div#res")
    let lista = document.querySelector("select#lista")
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos] 
            }if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        média = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>Maior valor ${maior}</p>`
        res.innerHTML += `<p>Menor valor ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é: ${média}</p>`
    }
}