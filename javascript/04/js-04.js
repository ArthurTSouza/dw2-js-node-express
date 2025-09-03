//Capturando elementos do DOM
// const parar = document.getElementById("parar")
// parar.style.backgroundColor="red"

// const atencao = document.getElementById("atencao")
// atencao.style.backgroundColor="yellow"

function parar(){
    document.querySelector("#parar").style.backgroundColor="red"
    document.querySelector("#atencao").style.backgroundColor="gray"
    document.querySelector("#prosseguir").style.backgroundColor="gray"
}

function atencao(){
    document.querySelector("#parar").style.backgroundColor="gray"
    document.querySelector("#atencao").style.backgroundColor="yellow"
    document.querySelector("#prosseguir").style.backgroundColor="gray"
}

function prosseguir(){
    document.querySelector("#parar").style.backgroundColor="gray"
    document.querySelector("#atencao").style.backgroundColor="gray"
    document.querySelector("#prosseguir").style.backgroundColor="green"
}