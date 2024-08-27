export default function validaIdade(campo){
    const dataNascimento = new Date(campo.value)
    if(!maiorDeIdade(dataNascimento)){
        campo.setCustomValidity('error')
    }
}

function maiorDeIdade(data){
    const dataAtual = new Date()
    const dataMaior = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataAtual >= dataMaior
}