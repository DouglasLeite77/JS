function calcular(){
var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")
var resultado = document.getElementById("res")

var n1 = Number(num1.value)
var n2 = Number(num2.value)

soma = num1.value + n2.value
resultado.value = soma
}