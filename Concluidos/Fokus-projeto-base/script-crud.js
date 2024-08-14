const btnAdicionarTask = document.querySelector('.app__button--add-task')
const btncancelarTask = document.querySelector('.app__form-footer__button--cancel')
const formAdicionarTask = document.querySelector('.app__form-add-task')
const textarea = document.querySelector('.app__form-textarea')
const ulTarefas = document.querySelector('.app__section-task-list')
const TaskAndamento = document.querySelector('.app__section-active-task-description')

const btnRemoveConcluidas = document.getElementById('btn-remover-concluidas')
const btnRemovetodas = document.getElementById('btn-remover-todas')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
let tarefaselecionada = null
let liselecionada = null

function atualizarTarefa() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas)) 
}

function addElementTask(tarefa) {
    const li = document.createElement('li')
    li.classList.add('app__section-task-list-item')

    const svg = document.createElement('svg')
    svg.innerHTML = `
         <svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>
    `

    const p = document.createElement('p')
    p.textContent = tarefa.descriçãoTask
    p.classList.add('app__section-task-list-item-description')
    const botao = document.createElement('button')
    botao.classList.add('app_button-edit')
    botao.onclick = () => {
        const novadescricao = prompt ("Qual é o novo nome da tarefa")
        if (novadescricao) {
            p.textContent = novadescricao
            tarefa.descriçãoTask = novadescricao
            atualizarTarefa()
        }
    }
    const img = document.createElement('img')
    img.setAttribute('src', './imagens/edit.png')

    botao.append(img)

    li.append(svg)
    li.append(p)
    li.append(botao)

    if (tarefa.completa) {
        li.classList.add('app__section-task-list-item-complete')
        botao.setAttribute('disabled', 'disabled')
    }else{
        li.onclick = () => {
            document.querySelectorAll('.app__section-task-list-item-active')
            .forEach(elemento =>{
                elemento.classList.remove('app__section-task-list-item-active')
            })
            if (tarefaselecionada == tarefa) {
                TaskAndamento.textContent = ''
                tarefaselecionada = null
                liselecionada = null
                return
            }
            liselecionada = li
            tarefaselecionada = tarefa
            TaskAndamento.textContent = tarefa.descriçãoTask
            li.classList.add('app__section-task-list-item-active')
        }
    }

    return li
}

btnAdicionarTask.addEventListener('click', () => {
    formAdicionarTask.classList.toggle('hidden')
})
btncancelarTask.addEventListener('click', () => {
    formAdicionarTask.classList.add('hidden')
})

formAdicionarTask.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const tarefa = {
        descriçãoTask: textarea.value
    }
    tarefas.push(tarefa)
    const elementotarefa = addElementTask(tarefa)
    ulTarefas.append(elementotarefa)
    atualizarTarefa()   
    textarea.value = ''
    formAdicionarTask.classList.toggle('hidden')
})

tarefas.forEach(tarefa => {
    const elementotarefa = addElementTask(tarefa)
    ulTarefas.append(elementotarefa)
})

document.addEventListener('focoFinalizado', () =>{
    if (tarefaselecionada && liselecionada) {
        liselecionada.classList.remove('app__section-task-list-item-active')
        liselecionada.classList.add('app__section-task-list-item-complete')
        liselecionada.querySelector('button').setAttribute('disabled', 'disabled')
        TaskAndamento.textContent = ''  
        tarefaselecionada.completa = true
        atualizarTarefa()
    }
})
const removerTarefa = (somentecompletas) =>{
    const seletor = somentecompletas ? '.app__section-task-list-item-complete' : '.app__section-task-list-item'
    document.querySelectorAll(seletor).forEach(elemento =>{
        elemento.remove()
    })
    tarefas = somentecompletas ? tarefas.filter(tarefa => !tarefa.completa) : []
    atualizarTarefa()
}

btnRemoveConcluidas.onclick = () => removerTarefa(true)
btnRemovetodas.onclick = () => removerTarefa(false)