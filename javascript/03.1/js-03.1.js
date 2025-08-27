//Classes
class Carro {
  //Para criar atributos deve-se utilziar o método 'constructor'
  constructor(marca, modelo, ano) {
    //This representa a instância (objeto)
    //O valor que for enviado a classe será atribuido a instância
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
  buzinar() {
    return "Beep! Beep!";
  }
}

//Criando Instâncias(objetos) derivadas da Classe Carro

const carroPopular = new Carro("Fiat", "Uno", 2012);
document.write(
  `<p>O carro ${carroPopular.modelo} da marca ${carroPopular.marca} é do ano ${
    carroPopular.ano
  } e é capaz de buzinar: ${carroPopular.buzinar()}</p>`
);

const carroEsportivo = new Carro();
carroEsportivo.marca = "Chevrolet";
carroEsportivo.modelo = "Camaro";
carroEsportivo.ano = 2024;

document.write(
  `<p>O carro ${carroEsportivo.modelo} da marca ${
    carroEsportivo.marca
  } é do ano ${
    carroEsportivo.ano
  } e é capaz de buzinar: ${carroEsportivo.buzinar()}</p>`
);

//Adicionar um novo atributo
carroEsportivo.corNeon = "Azul";

//Adicionar um novo método
carroEsportivo.turbo = () => {
  return "Vrummm! O carro acelera muito!!!";
};

document.write(`O carro ${carroEsportivo.marca} ${carroEsportivo.modelo} também possui neon da cor ${carroEsportivo.corNeon}. E quando usa o turbo ${carroEsportivo.turbo()}`);
