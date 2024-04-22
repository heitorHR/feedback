let botoes = document.querySelectorAll(". botoes button")
botoes.forEach(botao => {
    botao.addEventListener("click",guardarNotas )
})

function guardarNotas(evento){

    let nota = evento.target.innerText
    

    localStorage.setItem("nota", nota)


}