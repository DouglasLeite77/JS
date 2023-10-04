function Somar(){
    var num1 = window.document.getElementById("Num1")
    var num2 = window.document.getElementById("Num2")
    var resultado = window.document.getElementById("resultado")

    var Num1 = Number(num1.value)
    var Num2 = Number(num2.value)
    var soma = Num1 + Num2

    resultado.value = soma
}