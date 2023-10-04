function calcular(){
    var datanasc = document.getElementById("dataNasc")
    var resultado = document.getElementById("resultado")
    var hoje = new Date()
    var dataNasc = new Date(datanasc.value)
    var Resultado = Math.floor(
        Math.ceil(
            Math.abs(dataNasc.getTime() - hoje.getTime())
            / (1000 * 3600 * 24) 
        ) / 365.25
    )

    resultado.value = "A idade é " + Resultado + " ano(s)"
}