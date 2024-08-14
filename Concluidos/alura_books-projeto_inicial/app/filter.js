const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const Elementobtn = document.getElementById(this.id)
    const categoria = Elementobtn.value

    console.log(categoria)
    let livrosfiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibirLivros(livrosfiltrados)
    if(categoria == 'disponivel'){
        const valortotal = valortotalLivros(livrosfiltrados)
        exibirtotallivrosdisponivel(valortotal)
    }
}

function exibirtotallivrosdisponivel(valortotal){
    totaldisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valortotal}</span></p>
        </div>
        `
}