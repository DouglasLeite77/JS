let ordernarPreço = document.getElementById("btnOrdenarPorPreco")

ordernarPreço.addEventListener("click", ordenarlivros)

function ordenarlivros() {
    let livrosordenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivros(livrosordenados)   
}