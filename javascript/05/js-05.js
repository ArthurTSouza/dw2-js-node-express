//Manipulação de datas
document.write("<h3>Manipulando datas:</h3>");
//Criar uma istância da classe Date() do Javascript
const dataAtual= new Date();
document.write(dataAtual);
//Pegando o dia atual:
const dia= dataAtual.getDate();
document.write(`<p>Hoje é dia ${dia}</p>`);
//Pegando o mês atual
const mes=dataAtual.getMonth();
document.write(`<p>O mês atual é: ${mes+1}</p>`);
//Pegando o ano atual
const ano=dataAtual.getFullYear();
document.write(`<p>O ano atual é: ${ano}</p>`);
//Pegando o dia da semana atual
const diaSemana=dataAtual.getDay();
document.write(`<p>O dia semana atual é: ${diaSemana}</p>`);

//Adicionando dias, meses e anos à data atual
// dataAtual.setFullYear() = (dataAtual.getFullYear()+4);
// document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`);

// dataAtual.setMonth()= (dataAtual.getMonth()+3);
// dataAtual.setDate()=(dataAtual.getDay()+10);

//Formatação de Moedas
//Real
document.write("<h3>Formatação de moedas</h3>");
const salario = 1512;
const salarioReal = salario.toLocaleString("pr-br",{
    style: "currency",
    currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é de: ${salarioReal}.</p>`);

//dolar
const salarioDolar=salario.toLocaleString("pt-br",{
    style:"currency",
    currency: "USD",
})
document.write(`<p>O valor do salário mínimo atual é de: ${salarioDolar}.</p>`);

const salarioConvertido = salario *0.176;
document.write(`<p>O valor do salário mínimo atual convertido em dólar é de: ${salarioConvertido.toLocaleString("en",{
    style:"currency",
    currency: "USD",
})}.</p>`);

//Currency: EUR -> Euro

//Formatação de Strings
document.write("<h3>Formatação de Strings</h3>")
const nome= "Arthur Albino";
//Alternando letras maiúsculas
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`)
//Alternando letras minusculas
document.write(`<p>Nome em minusculas: ${nome.toLowerCase()}</p>`)
//Removendo espaços da String
const novoNome=nome.replace(/\s/g,"")
//Contando caracteres de uma string
document.write(`<p>Esse nome tem: ${novoNome.length} letras.</p>`)