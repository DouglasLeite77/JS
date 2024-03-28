function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0){
        res.innerHTML = "Dados invalidos para a contagem"
    } else {
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
        res.innerHTML = ""
        if(p <= 0){
            res.innerHTML = "A quantidade de passos não pode ser 0"
        }
        if(i < f){
            for(var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}`
            }
         }else{
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c}`  
            }
         }

        }
    }