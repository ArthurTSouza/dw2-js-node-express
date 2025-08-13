//Função Anônima
/*function(n1,n2){
    return n1+n2
}*/
const soma = function (n1, n2) {
  return n1 + n2;
};
document.write(`<p>O resultado da soma é ${soma(1, 89)}</p>`);
const tipo = typeof soma;
document.write(`${tipo}`);

//Arrow Function (função anônima)
//Se houver só um parâmetro o parentesis pode ser ocultado
const dobro = (x) => {
  return x * 2;
};
document.write(`<p>O dobro do número é: ${dobro(900)}</p>`);

//Arrow function com mais de um parâmetro
const calc = (num1, operador, num2) => {
  return eval(`${num1}${operador}${num2}`);
};
//eval no Javascript é uma função nativa que realiza cálculos a partir de dois números
document.write(`<p>O valor da conta é: ${calc(1100, "-", 1)}</p>`);

//Simplificando Arrow Function com um único retorno
const calculadora = (num1, operador, num2) => eval(`${num1}${operador}${num2}`);

//eval no Javascript é uma função nativa que realiza cálculos a partir de dois números
document.write(`<p>O valor da conta é: ${calculadora(1100, "+", 1)}</p>`);

// IIFE- Função Imediata (Immediately Invoked Function Expression)
 (function () {
  document.write(`Estou sendo executada imediatamente`);
})();

//IIFE com parâmetro
 (function(user){
    document.write(`<p>Carregando as informações do usuário:<strong> ${user}...</strong></p>`)
})("Arthur");
