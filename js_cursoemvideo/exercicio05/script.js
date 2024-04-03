function gerar(){
    var num = document.getElementById('numero')
    var res = document.getElementById('res')

    var n1 = Number(num.value)
    res.innerHTML = ""

    for(contador = 1; contador <= 10; contador++){
        let resultado = document.createElement('option')
        resultado.innerHTML = `${contador} x ${n1} = ${n1 * contador}`
        res.appendChild(resultado)
    }
}