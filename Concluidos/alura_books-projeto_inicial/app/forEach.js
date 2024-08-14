const Estante = document.getElementById("livros")
const totaldisponiveis = document.getElementById("valor_total_livros_disponiveis")




function exibirLivros(listadelivros){
  Estante.innerHTML = ''
  totaldisponiveis.innerHTML = ''
    listadelivros.forEach(livro => {
      let disponibilidade = livro.quantidade ? 'livro__imagens' : 'livro__imagens indisponivel'
      Estante.innerHTML += 
        `
        <div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="${disponibilidade}">${livro.titulo}</h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
      <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `
    })
}   
