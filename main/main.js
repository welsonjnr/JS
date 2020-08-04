const a = 1 // Não pode ter o valor reatribuido
//a = 3 // Não é possível

//Mas, a mutação é possivel. Veja o exemplo abaixo.
const usuario = {nome:'Diego'}
usuario.nome='Cleiton'
console.log(usuario)

function teste(x){
    let y = 2 //let variável escopo

    if(x>5){
        console.log(x, y)
    }

}

teste(10)