function calcular(){
    var tabuada = Number(document.getElementById("tabuada").value)
    var resultado = document.getElementById("resultado")


    if(tabuada == 0){
        window.alert("Número invalido")
    }else{
        resultado.innerHTML=''
    for(contador = 1; contador <= 10; contador++){
        let res = document.createElement('option')
         res.text = `${tabuada} x ${contador} = ${tabuada * contador}`
         resultado.appendChild(res)
    }
}

}
