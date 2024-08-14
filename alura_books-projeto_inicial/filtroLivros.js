const btns = document.querySelectorAll(".btn")
const btnPreco = document.querySelector("#btnOrdenarPorPreco")
const btnDisponiveis = document.querySelector("#btnLivrosDisponiveis")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        categoria = btn.value
        filtrarLivros(categoria)
    })
})

function filtrarLivros(categoria){
    let livrosFiltrados = livros.filter(livro => 
        livro.categoria == categoria)
        section.innerHTML = ''
        precoTotal.innerHTML = ""
        MostrarLivros(livrosFiltrados)
}


btnPreco.addEventListener("click", ordenarPorPreco)

function ordenarPorPreco(){
    let livrosOrdenados = livrosComDesconto.sort((a, b) => a.preco - b.preco)
    MostrarLivros(livrosOrdenados)
}

btnDisponiveis.addEventListener("click", ordenarDisponiveis)

function ordenarDisponiveis(){
    let livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)
    let preco = livrosDisponiveis.reduce((acc, livro) => acc + livro.preco, 0)
    console.log(preco)
    precoTotal.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${preco}</span></p>
    </div>`
    MostrarLivros(livrosDisponiveis)
}


