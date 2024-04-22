function pegarNota(){
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelector(".paragrafo_notas") 

    paragrafoNota.innerHTML = `você selecionou ${nota} de 5`

}

pegarNota()

