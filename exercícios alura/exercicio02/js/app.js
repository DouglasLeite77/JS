function alterarStatus(id){
    let game = document.getElementById(`game-${id}`)
    let div = game.querySelector(".dashboard__item__img")
    let a = game.querySelector(".dashboard__item__button")

    if(div.classList.contains("dashboard__item__img--rented")){
        div.classList.remove("dashboard__item__img--rented")
    }else{
        div.classList.add("dashboard__item__img--rented")
    }

    if(a.classList.contains("dashboard__item__button--return")){
        a.classList.remove("dashboard__item__button--return")
        a.textContent = "Alugar"
    }else{
        a.classList.add("dashboard__item__button--return")
        a.textContent = "Devolver"
    }

}