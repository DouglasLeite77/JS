document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').textContent = ''
let vtotal = 0

function adicionar(){
    let produto = document.getElementById("produto").value
    let quantidade = document.getElementById("quantidade").value
    let nomep = produto.split('-')[0]
    let precop = produto.split('R$')[1]
    let total = precop * quantidade
    let listap = document.getElementById('lista-produtos')
    

    vtotal = vtotal + total
    let campot = document.getElementById('valor-total')
    campot.textContent = `R$${vtotal}`


    listap.innerHTML = listap.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}</span> ${nomep} <span class="texto-azul">R$${precop}</span>
  </section>`

  document.getElementById("quantidade").value = 0
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = ''
     vtotal = 0
}