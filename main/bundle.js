"use strict";

var arr = [1, 3, 4, 5, 9, 8, 7]; //Map
//Percorre o vetor e executa a ação desejada

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Reduce
//Pega tudo e transforma em uma única informação 

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //Serve para filtrar o array, tipo pegar só os pares ou apenas os impares

var filter = arr.filter(function (item) {
  //Ela obrigatóriamente precisa retornar true ou false  
  return item % 2 === 0;
});
console.log(filter); //Find
//Verificar uma informação dentro de um array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
