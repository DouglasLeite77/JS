export default function EhmaiorIdade(campo){
    const dataNascimento = new Date(campo.value);
    if (!validaidade(dataNascimento)){
        campo.setCustom.Validity("O usuario é menor de idade")
    }
}

function validaidade(data){
    const dataatual = new Date();
    const datamais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    return dataatual >= datamais18;
}