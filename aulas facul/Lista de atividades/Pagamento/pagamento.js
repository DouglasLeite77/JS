function Calcular(){
    var ganho = window.document.getElementById("ganho")
    var horas = window.document.getElementById("horas")
    var resultado = window.document.getElementById("resultado")

    Resultado = ganho.value * horas.value

    resultado.value ="Você ganha " + Resultado + " reais por mês"

}