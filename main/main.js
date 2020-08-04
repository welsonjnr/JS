const arr = [1,3,4,5,9,8,7]

//Map
//Percorre o vetor e executa a ação desejada
const newArr = arr.map(function(item, index){
    return item + index
})

console.log(newArr)

//Reduce
//Pega tudo e transforma em uma única informação 
const sum = arr.reduce(function(total, next){
    return total+next
})

console.log(sum)

//Serve para filtrar o array, tipo pegar só os pares ou apenas os impares
const filter = arr.filter(function(item){
//Ela obrigatóriamente precisa retornar true ou false  
    return item % 2 === 0
})

console.log(filter)

//Find
//Verificar uma informação dentro de um array
const find = arr.find(function(item){
    return item === 4
})

console.log(find)