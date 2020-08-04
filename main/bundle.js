"use strict";

var a = 1; // Não pode ter o valor reatribuido
//a = 3 // Não é possível
//Mas, a mutação é possivel. Veja o exemplo abaixo.

var usuario = {
  nome: 'Diego'
};
usuario.nome = 'Cleiton';
console.log(usuario);

function teste(x) {
  var y = 2; //let variável escopo

  if (x > 5) {
    console.log(x, y);
  }
}

teste(10);
