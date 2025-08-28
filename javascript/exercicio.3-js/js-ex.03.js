class heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "O herói está correndo!";
  }
  andar() {
    return "O herói está andando!";
  }
  atacar() {
    return "O herói está atacando!";
  }
  defender() {
    return "O herói está se defendendo!";
  }
}
const Spiderman = new heroi("Homem-aranha", 80, 90, 80);

Spiderman.teia=1;
Spiderman.sentidoAranha=()=>{
  return("Perigo detectado");
}

document.write(
  `<p>Nome: ${Spiderman.nome}<br>Vida: ${Spiderman.vida}<br>Velocidade: ${Spiderman.velocidade}<br> Força: ${Spiderman.forca}<br>${Spiderman.sentidoAranha()}<br>Soltar teia: ${Spiderman.teia}<br>${Spiderman.defender()}</p>`
);

const Superman = new heroi("Superman",100,100,100);
Superman.podeVoar=1;
Superman.visaoCalor=()=>{
  return("Usando visão de calor");
}

document.write(
  `<p>Nome: ${Superman.nome}<br>Vida: ${Superman.vida}<br>Velocidade: ${Superman.velocidade}<br> Força: ${Superman.forca}<br>${Superman.visaoCalor()}<br>Voar: ${Superman.podeVoar}<br>${Superman.atacar()}</p>`
);

const Batman = new heroi("Batman",70,80,90);
Batman.esconder=0;
Batman.investigar=()=>{
  return("Investigando um crime");
}

document.write(
  `<p>Nome: ${Batman.nome}<br>Vida: ${Batman.vida}<br>Velocidade: ${Batman.velocidade}<br> Força: ${Batman.forca}<br>${Batman.investigar()}<br>Se esconder: ${Batman.esconder}<br>${Batman.correr()}</p>`
);
