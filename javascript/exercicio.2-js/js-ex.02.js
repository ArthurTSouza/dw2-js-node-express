const listaClientes = [
  {
    nome: "Ana Paula Santos",
    endereco: "Rua das Flores, 123 - Centro, São Paulo - SP",
    cpf: 12345678901,
  },
  {
    nome: "Roberto Oliveira Lima",
    endereco: "Avenida do Sol, 456 - Jardim América, Rio de Janeiro - RJ",
    cpf: 98765432109,
  },
  {
    nome: "Mariana Costa Pereira",
    endereco: "Travessa da Lua, 789 - Bela Vista, Belo Horizonte - MG",
    cpf: 45678912345,
  },
];

listaClientes.forEach((clientes) => {
  document.write(
    `<p>O cliente de CPF ${clientes.cpf}<br> se chama ${clientes.nome}<br> e mora no endereco ${clientes.endereco}</p>`
  );
});

listaClientes.push({
  nome: "Carlos Eduardo Silva",
  endereco: "Rua das Palmeiras, 321 - Bairro Novo, Curitiba - PR",
  cpf: 78901234567,
});

document.write(
  `Um cliente foi adicionado ao <b>final</b> do vetor<br>
   <p>O cliente de CPF ${
     listaClientes[listaClientes.length - 1].cpf
   }<br> se chama ${
    listaClientes[listaClientes.length - 1].nome
  }<br> e mora no endereco ${
    listaClientes[listaClientes.length - 1].endereco
  }</p>`
);

listaClientes.unshift({
  nome: "Fernanda Gomes Almeida",
  endereco: "Rua Laranjeiras, 50 - Vila Esperança, Porto Alegre - RS",
  cpf: 1234567890,
});

document.write(
  `Um cliente foi adicionado ao <b>início</b> do vetor<br> <p>O cliente de CPF ${
    listaClientes[0].cpf
  }<br> se chama ${
    listaClientes[0].nome
  }<br> e mora no endereco ${
    listaClientes[0].endereco
  }</p>`
);

document.write("<h2><p>O array finalizado</p></h2>")
listaClientes.forEach((clientes) => {
  document.write(
    `<p>O cliente de CPF ${clientes.cpf}<br> se chama ${clientes.nome}<br> e mora no endereco ${clientes.endereco}</p>`
  );
});