let listaDeItens = []
let itemEdicao

const form = document.getElementById("form-itens")
const inputForm = document.getElementById("receber-item")
const UlItens = document.getElementById("lista-de-itens")
const UlItensComprados = document.getElementById("itens-comprados")
const listaRecuperada = localStorage.getItem('listaDeItens')

function localSave(){
    localStorage.setItem('listaDeItens', JSON.stringify(listaDeItens))
}

if(listaRecuperada){
    listaDeItens = JSON.parse(listaRecuperada)
    mostrarItem()
}else{
    listaDeItens = []
}

form.addEventListener("submit", function (event) {
    event.preventDefault()
    salvarItem()
    mostrarItem()
    inputForm.focus()
})

function salvarItem(){
    const item = inputForm.value
    const checarItem = listaDeItens.some((elemento) => elemento.valor.toUpperCase() === item.toUpperCase())

    if(checarItem){
        alert("Item já existe na lista")
        return
    }
    listaDeItens.push({
        valor: item,
        checar: false
    })
    inputForm.value = ''
} 

function mostrarItem(){
    UlItens.innerHTML = ''
    UlItensComprados.innerHTML = ''
    listaDeItens.forEach((elemento,index) => {
        if(elemento.checar){
            UlItensComprados.innerHTML += 
        ` <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" checked class="is-clickable" />  
            <span class="itens-comprados is-size-5">${elemento.valor}</span>
        </div>
        <div>
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
        </li>`
        }else{
        UlItens.innerHTML +=
        `
        <li class="item-compra is-flex is-justify-content-space-between" data-value="${index}">
        <div>
            <input type="checkbox" class="is-clickable" />
            <input type="text" class="is-size-5" value="${elemento.valor}" ${index != itemEdicao ? 'disabled' : ''}></input>
        </div>
        <div>
            ${index === Number(itemEdicao) ? '<button onclick="salvarEdicao()"><i class="fa-regular fa-floppy-disk is-clickable"></i></button>' : '<i class="fa-regular is-clickable fa-pen-to-square editar"></i>'}
            <i class="fa-solid fa-trash is-clickable deletar"></i>
        </div>
        </li>
        `
        }
    })

    const checkInput = document.querySelectorAll('input[type="checkbox"]')

    checkInput.forEach(i => {
        i.addEventListener('click', (elemento) => {
            valorElemento = elemento.target.parentElement.parentElement.getAttribute("data-value")
            listaDeItens[valorElemento].checar = elemento.target.checked
            mostrarItem()
        })
    });

    const deletarObjeto = document.querySelectorAll(".deletar")

    deletarObjeto.forEach(i => {
        i.addEventListener('click', (elemento) => {
            valorElemento = elemento.target.parentElement.parentElement.getAttribute("data-value")
            listaDeItens.splice(valorElemento,1)
            mostrarItem()
        })
    });

    const edicao = document.querySelectorAll(".editar")

    edicao.forEach(i => {
        i.addEventListener('click', (elemento) => {
            itemEdicao = elemento.target.parentElement.parentElement.getAttribute("data-value")
            mostrarItem()
        })
    });

    localSave()
}

function salvarEdicao() {
    const itemEditado = document.querySelector(`[data-value="${itemEdicao}"] input[type="text"]`)
    listaDeItens[itemEdicao].valor = itemEditado.value
    mostrarItem()
    console.log(listaDeItens)
    itemEdicao = -1
}







