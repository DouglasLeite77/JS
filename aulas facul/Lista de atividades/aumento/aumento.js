function calcular(){
var salario = Number(window.document.getElementById("salario").value)
var nsalario = 0
var reajuste = 0

if(salario <= 1280){
    reajuste = 0.2
} else if(salario <= 2700){
    reajuste = 0.15
}else if(salario <= 3500){
    reajuste = 0.1
}else{
    reajuste = 0.05
}

nsalario = salario + (salario * reajuste)

document.getElementById("resultado").value = nsalario.toFixed(2)
}
