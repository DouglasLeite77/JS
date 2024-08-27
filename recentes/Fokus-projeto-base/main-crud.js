const btnAdicionarTarefa = document.querySelector('.app__button--add-task')
const formTarefa = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
const ulTarefa= document.querySelector('.app__section-task-list')
const btnConcluidas = document.querySelector('#btn-remover-concluidas')
const btnTodas = document.querySelector('#btn-remover-todas')

let tarefas = JSON.parse(localStorage.getItem('Tarefas')) || []
const emAndamento = document.querySelector('.app__section-active-task-description')
let novaTarefa = null
let novaLi = null

function alterarDescrição () {
    localStorage.setItem('Tarefas', JSON.stringify(tarefas))
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
        <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z"
                fill="#01080E"></path>
        </svg>
    `

    const paragrafo = document.createElement('p')
    paragrafo.textContent = tarefa.descricao
    paragrafo.classList.add('app__section-task-list-item-description')

    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')

    botao.onclick = () => {
        const novaDescricao = prompt('Digite o novo nome da tarefa')
        if(novaDescricao){
            paragrafo.textContent = novaDescricao
            tarefa.descricao = novaDescricao
            alterarDescrição()
        }
    }

    const imagemBotao = document.createElement('img')
    imagemBotao.setAttribute('src', './imagens/edit.png')
    botao.append(imagemBotao)

    li.append(svg)
    li.append(paragrafo)
    li.append(botao)

    if(tarefa.completa){
        li.classList.add('app__section-task-list-item-complete')
        botao.setAttribute('disabled', 'disabled')
    }else{
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
                .forEach(elemento => {
                    elemento.classList.remove('app__section-task-list-item-active')
                })
            if(novaTarefa == tarefa){
                emAndamento.textContent = ''
                novaTarefa = null
                novaLi = null
                return
            }
            li.classList.add('app__section-task-list-item-active')
            emAndamento.textContent = tarefa.descricao
            novaTarefa = tarefa
            novaLi = li
        }
    }

    return li
}

btnAdicionarTarefa.addEventListener('click', () => {
    formTarefa.classList.toggle('hidden')
})

formTarefa.addEventListener('submit', (bedo) => {
    bedo.preventDefault();

    const Tarefa = {
        descricao: textarea.value
    }

    tarefas.push(Tarefa)
    const elementoTarefa = criarElementoTarefa(Tarefa)
    ulTarefa.append(elementoTarefa)
    alterarDescrição()
    textarea.value = ''
    formTarefa.classList.add('hidden')
})

tarefas.forEach(element => {
    const elementoTarefa = criarElementoTarefa(element)
    ulTarefa.append(elementoTarefa)
});

document.addEventListener('FocoFinalizado', () => {
    if(novaLi){
        novaLi.classList.remove('app__section-task-list-item-active')
        novaLi.classList.add('app__section-task-list-item-complete')
        novaLi.querySelector('button').setAttribute('disabled', 'disabled')
        novaTarefa.completa = true
        alterarDescrição()
    }
})

const removerTarefas = (somenteCompletas) =>{
    const seletor =  somenteCompletas ?".app__section-task-list-item-complete" : ".app__section-task-list-item"
    document.querySelectorAll(seletor).forEach(elemento => {
        elemento.remove()
    })
    tarefas = somenteCompletas ?tarefas.filter(tarefas => !tarefas.completa) : []
    alterarDescrição()
}

btnConcluidas.onclick = () => removerTarefas(true)
btnTodas.onclick = () => removerTarefas(false)