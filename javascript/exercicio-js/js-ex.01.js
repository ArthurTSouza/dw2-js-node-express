const saudacaoPersonalizada = function (nome) {
  document.write(`<p>Olá, ${nome}! Bem-vindo(a) à Calculadora Universal!</p>`);
};
saudacaoPersonalizada("Teste");

const num1 = 10;
const operador = "*";
const num2 = 5;

const operacaoMatematica = (num1, operador, num2) => {
  return eval(`${num1}${operador}${num2}`);
};

document.write(
  `<p>O resultado de ${num1} ${operador} ${num2} é igual a ${operacaoMatematica(
    num1,
    operador,
    num2
  )}...</p>`
);

const calcularDobro = (x) => {
  return x * 2;
};
document.write(`O dobro de ${num1} é ${calcularDobro(num1)}`);

const calcularMetade = (y) => {
  return y / 2;
};
document.write(`<p>A metade de ${num2} é ${calcularMetade(num2)}</p>`);

const iife = (function () {
  document.write("<p>Calculadora Universal pronta para uso!</p>");
})();