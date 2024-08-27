let livros = []
const section = document.getElementById("livros")
const API = "https://guilhermeonrails.github.io/casadocodigo/livros.json"
const precoTotal = document.getElementById("valor_total_livros_disponiveis")
precoTotal.innerHTML = ""

async function buscaLivros() {
    const buscar = await fetch(API)
    livros = await buscar.json()
    let livrosComDesconto = aplicaDesconto(livros)
    MostrarLivros(livrosComDesconto)
}

 function MostrarLivros(livros) {
    try{        
        if(livros.categoria == ""){
            throw new Error('Livro sem categoria')
        }
        livros.forEach(livro => {
            let disponivel = verificaDisponibilidade(livro)
            section.innerHTML += `
            <div class="livro">
            <img class="${disponivel}" src=${livro.imagem} alt="Capa do livro Cangaceiro JavaScript" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
            </div>`
        })
    }catch(error){
        section.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
    }
}
buscaLivros()


function verificaDisponibilidade(livro){
    if(livro.quantidade > 0 ){
        return 'livro__imagens'
    }else{
        return 'livro__imagens indisponivel'
    }
}

function aplicaDesconto(livros){
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}