function pegarNota(){
    let nota = localStorage.getItem("nota")

    let paragrafoNota = document.querySelectorAll(".paragrafo_Nota") 

    paragrafoNota.innerHTML = 'você selecionou ${nota} de 5 '

}

pegarNota()

