function converter(){
    var temp1 = window.document.getElementById("temperatura1")
    var resultado = window.document.getElementById("resultado")
    var Temp1 = Number(temp1.value)

    Resultado = (Temp1 - 32) * 5 / 9

    resultado.value = Temp1 + " ºF = " + Resultado.toFixed(2) + " ºC" 
}