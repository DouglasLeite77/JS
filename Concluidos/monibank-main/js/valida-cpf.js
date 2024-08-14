export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if (validaNumerosRepetidos(cpf) || validaprimeirodigito(cpf) || validasegundodigito(cpf)) {
        campo.set.CustomValidity('esse cpf é invalido')
    }}
/*
replace, que por sua vez recebe dois parâmetros: o primeiro indica o conteúdo que queremos substituir (no caso, os caracteres especiais . e -), enquanto o segundo indica o conteúdo que será utilizado para substituí-lo (no caso, um campo vazio). Através desta função, efetuamos a remoção dos caracteres especiais nos casos de inputs com essa característica, normalizando esses valores e tornando mais fácil a comparação e validação entre os tipos de CPF inseridos.*/

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function validaprimeirodigito(cpf){
    let soma = 0
    let multiplicador = 10

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador
        multiplicador--;
    }
    soma = (soma * 10) % 11

    if(soma == 11 || soma == 10){
        soma = 0
    }

    return soma != cpf[9]
}

function validasegundodigito(cpf){
    let soma = 0
    let multiplicador = 11

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador
        multiplicador--;
    }
    soma = (soma * 10) % 11

    if(soma == 11 || soma == 10){
        soma = 0
    }

    return soma != cpf[10]
}