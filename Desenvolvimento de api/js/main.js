function pesquisarSeriado() {
    const id = document.getElementById('nomeSeriado').value;
    const url = 'http://localhost:3000/seriados/' + id
    const elementoResultado = document.getElementById('resultado');

    fetch(url)
    .then(function(response) {
        if (!response.ok) {
        throw new Error("Seriado não foi encontrado.");
        }
        return response.json();
    })
    .then(function(seriado){
        document.getElementById('tituloSeriado').textContent = seriado.nome;
        document.getElementById('categoriaSeriado').textContent = `Categoria: ${seriado.categoria}`;
        document.getElementById('atoresSeriado').textContent = `Atores: ${seriado.atores}`;
        document.getElementById('temporadasSeriado').textContent = `Temporadas: ${seriado.temporadas}`;
        document.getElementById('episodios').textContent = `Episódios: ${seriado.episódios}`
        elementoResultado.style.display = "block"
    })
}
