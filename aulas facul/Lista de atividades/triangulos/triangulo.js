function teste(){
    var l1 = Number(window.document.getElementById("lado1").value)
    var l2 = Number(window.document.getElementById("lado2").value)
    var l3 = Number(window.document.getElementById("lado3").value)
    var resultado = window.document.getElementById("res")

    if (l1 > 0 && l2 > 0 && l3 > 0) {
        var eh_triangulo = (l1 + l2) > l3 || (l1 + l3) > l2 || (l3 + l2) > l1
        var eh_equilatero = l1 == l2 && l2 == l3
        var eh_isoceles = l1 == l2 || l2 == l3 || l1 == l3
    }

    if(eh_triangulo == true){
    if (eh_equilatero == true){
        resultado.value = "É triangulo um equilatero"
    }else if(eh_isoceles == true){
        resultado.value = "É um triangulo isoceles"
    } else{
        resultado.value = "É um triangulo escaleno"
    }
  }else {
    resultado.value = "Não é um triangulo"
  }
}