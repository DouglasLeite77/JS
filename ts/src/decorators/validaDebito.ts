export function validaDebito(target: any, propertyKey: string, descriptor: PropertyDescriptor ){
    const metodoOriginal = descriptor.value
    
    descriptor.value = function(valorDeDebito: number){
        if(valorDeDebito <= 0){
            throw new Error("O valor debitado deve ser maior que zero") 
        }
        if(valorDeDebito > this.saldo){
            throw new Error("Saldo insuficiente")
        }

        return metodoOriginal.apply(this, [validaDebito])
    }

    return descriptor
}