const nome = 'Enzo'
const idade = 10

//Modelo antigo
const usuario1 = {
    nome: nome,
    idade: idade,
    empresa: 'Netflix'
}

console.log(usuario1)

//Object Short Syntax

const usuario = {
    nome,
    idade,
    empresa: 'Netflix'
}

console.log(usuario)