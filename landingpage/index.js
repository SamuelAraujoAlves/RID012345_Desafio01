var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")

function Rolarparadireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:55px"
}

function Rolarparaesquerda(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    setadireita.style = "display:flex;  margin-top:55px"
    setaesquerda.style = "displa:none"
}