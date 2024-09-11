export function validaDeposito(target: any, propertyKey: string, descriptor: PropertyDescriptor ){
    const metodoOriginal = descriptor.value
    
    descriptor.value = function(valorDeDeposito: number){
        if(valorDeDeposito <= 0){
            throw new Error("O valor depositado deve ser maior que zero") 
        }
        return metodoOriginal.apply(this, [validaDeposito])
    }

    return descriptor
}