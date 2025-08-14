//Arrays (vetores): Servem para armazenar uma lista, ou seja, diferentes elementos em única variável
let Produtos = ['Computador','Notebook','Celular','Tablet'];
document.write(`<p>${Produtos}</p>`);
document.write(`<p>Exibindo um elemento do array através do índice: ${Produtos[3]}</p>`);
document.write(typeof(Produtos));

document.write("<p>Percorrendo um array através do forEach:</p>");
Produtos.forEach(produto=>{
    document.write(`<p>${produto}</p>`)
})

document.write("<p>Mostrando os índices e valores com forEach:</p>");
Produtos.forEach((produto,i)=>{
    document.write(`<p>${i+1} - ${produto}</p>`)
})