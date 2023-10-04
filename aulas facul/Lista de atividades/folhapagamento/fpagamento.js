function calcular(){
    var horas = Number(window.document.getElementById("horas").value)
    var valor = Number(window.document.getElementById("valor").value)
    var salario = horas * valor
    var ir = 0
    var desconto = 0
    var inss = 0
    var salariol = 0

    if(salario <= 900){
        ir = 0
    }else if(salario <= 1500){
        ir = 0.05
    }else if (salario <= 2500){
        ir = 0.1
    }else {
        ir = 0.2
    }

    desconto = salario * ir
    inss = salario * 0.1

    salariol = salario - (inss + desconto)

    document.getElementById("resultado").value = salariol

}