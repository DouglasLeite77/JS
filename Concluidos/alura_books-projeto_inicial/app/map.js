function aplicaDesconto(livros){
    const desconto = 0.3

    livrosComdesconto = livros.map(livro => {
        return{
            ...livro, preco: livro.preco - (livro.preco * desconto) 
        }
    })
    return livrosComdesconto
}