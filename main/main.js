//REST
//Pegar o resto da propriedades

const usuario = {
    nome: 'Joao',
    idade: 21,
    empresa: 'Cleitionho'
}

//Esse ponto vai armazenar o restante das informações em outra variável
const {nome, ...resto} = usuario

console.log(nome)
console.log(resto)

const arr = [1,2,3,4]

const [a, b, ...c] = arr

console.log(a)
console.log(c)

//REST para parâmetros
function soma(...params){
    return params.reduce((total, next) => total + next) 
}

console.log(soma(1, 3, 4))

function sum(a, b, ...params){
    return params
}

console.log(sum(1, 3, 4))

//SPREAD
//Repassa as informações adquiridas para outra estrutura de dados
const arr1 = [1,2,3]
const arr2 = [4,5,6]

const arr3 = [...arr1, ...arr2]

console.log(arr3)


const usuario1 = {
    nome: 'Paulo',
    idade: 12,
    empresa: 'Pamonharia'
}

//Recebe todas as variáveis e informação do usuário1 e muda o nome
const usuario2 = {...usuario1, nome:'Gabriel'}

console.log(usuario2)