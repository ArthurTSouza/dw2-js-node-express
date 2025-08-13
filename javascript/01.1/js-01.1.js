//Variaveis podem ser declaradas de 3 formas:
// let - Útil para casos de reatribuição de valores
// var - pode não ser muito seguro
// const - Constante

//Tipos de Funções

//Função Simples
const message = "<h2>Olá! Bem-vindo! Essa é sua primeira função!</h2>";
function showMessage() {
  document.write(message);
}

//Invocando a função:
showMessage();

//Função com parâmetro
const user = "Arthur Albino";
function userMessage(message) {
  //${} Template strings / Literal Strings
  //Essa função agora recebe um parâmetro (Pode ter o nome que quiser)
  document.write(`<h3>O que deseja fazer hoje, ${message}?</h3>`);
}
userMessage(user); //Isto é um argumento

//Função com mais de um parâmetro
const n1 = 10;
const n2 = 2;
//Essa função recebe dois parâmetros
function multi(n1, n2) {
  let result = n1 * n2;
  document.write(`A Multiplicação de ${n1} e ${n2} é igual a: ${result}.`);
}
multi(n1, n2);

//Função com retorno
const num1 = 1000;
const num2 = 5;
function div(num1, num2) {
  return num1 / num2;
}
document.write(
  `<p>A divisão de ${num1} por ${num2} é igual a: ${div(num1, num2)} </p>`
);

//Função com diferentes retornos
const number = 4;
function parImpar(number) {
  if (number % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
document.write(`<p>O número ${number} é <b>${parImpar(number)}</b></p>`);
