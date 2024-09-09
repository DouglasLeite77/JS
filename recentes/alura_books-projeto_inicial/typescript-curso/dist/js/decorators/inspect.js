export function inspect(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        const retorno = metodoOriginal.apply(this, args);
        console.log(`--- Método: ${propertyKey}`);
        console.log(`------ parâmetros: ${JSON.stringify(args)}`);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
    };
}
