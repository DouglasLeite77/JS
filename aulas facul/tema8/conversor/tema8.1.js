function converter(){
    var moeda = window.document.getElementById("moeda")
    var resultado = window.document.getElementById("resultado")
    var cotação = 5.30  

    var Moeda = Number(moeda.value)

    Resultado = Moeda / cotação

    resultado.value = Resultado
}