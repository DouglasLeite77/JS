function Calcular(){
    var peso = window.document.getElementById("peso")
    var altura = window.document.getElementById("altura")
    var resultado = window.document.getElementById("resultado")

    var IMC = peso.value / (altura.value * altura.value)
    
    var classificação
    if(IMC <16.9){
        var classificação = " Muito abaixo do peso"
    }else if(IMC <= 18.4){ 
        var classificação = " Abaixo do peso" 
    }else if(IMC <= 24.9){
        var classificação = " Peso normal"
    }else if(IMC <= 29.9){
        var classificação = " Acima do peso"
    }else if(IMC <= 34.9){
        var classificação = " Obesidade grau 1"
    }else if(IMC <= 40){
        var classificação = " Obesidade grau 2"
    }else if(IMC > 40){
        var classificação = " Obesidade grau 3"
    }

    resultado.value = IMC.toFixed(2) + classificação
}