function calcular() {

    var resultado = document.getElementById("resultado")
    var datanascimento = document.getElementById("datanascimento").valueAsDate
    var ano = datanascimento.getUTCFullYear()
    var idadeAtual = idade(1,1,ano)
    
  
    resultado.value = " sua idade é " + idadeAtual + " anos"
}

function idade(dia, mes, ano) {
    return new Date().getFullYear() - ano;
 }