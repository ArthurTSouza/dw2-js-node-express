//Variaveis podem ser declaradas de 3 formas:
// let - Útil para casos de reatribuição de valores 
// var - pode não ser muito seguro
// const - Constante

//Tipos de Funções

//Função Simples
const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função!</h2>"
function showMessage(){
    document.write(message)
}

//Invocando a função:
showMessage();

//Função com parâmetro
const user= "Arthur Albino"
function userMessage(message){
    //${} Template strings / Literal Strings
    //Essa função agora recebe um parâmetro (Pode ter o nome que quiser)
    document.write(`<h3>O que deseja fazer hoje, ${message}?</h3>`)
}
userMessage(user); //Isto é um argumento