function investigar(){
    var telefone = window.document.getElementById("telefone")
    var local = window.document.getElementById("local")
    var mora = window.document.getElementById("mora")
    var devia = window.document.getElementById("devia")
    var trabalho = window.document.getElementById("trabalho")
    var resultado = window.document.getElementById("resultado")

    var contador = 0

    if(telefone.checked){contador++}
    if(local.checked){contador++}
    if(mora.checked){contador++}
    if(devia.checked){contador++}
    if(trabalho.checked){contador++}

    switch(contador){
        case 2: 
        resultado.value = "Suspeito"
            break
        case 3:
        case 4:
            resultado.value = "Cúmplice"
            break
        case 5:
            resultado.valeu = "Assassino"
        default:
            resultado.value = "Inocente"

    }
}