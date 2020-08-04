const arr = [1,3,4,5,9,8,7]

//Arrow Functions -> Função anônima
//Um parâmetro pode se remover as parênteses da função

/*const newArr = arr.map(item=>{
    return item * 2
})*/

//Quando for retornar algo simples e não um corpo de função pode tirar o return
//Quando for passar um único parâmetro é muito recomendado usar arrow function

//-----const newArr = arr.map(item=>item * 2)

//Não pode passar objeto para a arrow poís as chaves servem para o corpo da função

//-----const teste = () => {nome:'João'}

/* Assim funcionaria
const teste = () => {
    return {nome: 'Diego'}
}
*/

//Para contornar o problema é so utilizar dessa forma ({ dados })
const teste = () => ({nome: 'João'})
console.log(teste)