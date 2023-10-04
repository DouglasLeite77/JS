function buscar(){
    var fruta = window.document.getElementById("fruta")
    var valor = window.document.getElementById("valor")

    switch(fruta.value){
        case "laranja":
            valor.value = "O kilo da laranja esta custando 5 reais"
            break
            case "uva":
            valor.value = "O kilo da uva esta custando 8 reais"
            break
            default:
                valor.value = "Não temos essa fruta disponível"
    }
}