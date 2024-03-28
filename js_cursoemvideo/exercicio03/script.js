function Enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nas')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano ){
        res.innerHTML = "Data de nascimento invalida"
    } else{
        var fsex = document.getElementsByName('sex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        if (fsex[0].checked){
            genero = "Homem"
        }else{
            genero = "Mulher"
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos `
    }


}