export class View {
    constructor(seletor) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error("Seletor não existe no DOM.");
        }
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
