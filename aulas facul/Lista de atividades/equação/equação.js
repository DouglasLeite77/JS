function calcular(){
    var a = Number(document.getElementById("a").value)
    var b = Number(document.getElementById("b").value)
    var c = Number(document.getElementById("c").value)
    var delta = 0
    var resultado = 0

    delta = (b * b) - 4 * a * c

    if(delta > 0){
        raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
        raiz2 = (-b - Math.sqrt(delta)) / (2 * a);

        resultado = "raiz 1: " + raiz1 + " raiz 2: " + raiz2
    }else if (delta == 0 ){
        raiz1 = (-b + Math.sqrt(delta)) / (2 * a);

        resultado = "raiz dupla: " + raiz1
    }else {
        resultado = "Não existem raízes reais"
    }

    document.getElementById("resultado").value = resultado
}