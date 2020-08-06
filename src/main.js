const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => {resolve('OK')}, 2000)
})

//As Promisses garatem que um método espere até o outro ser executado para que o 
//Posterior tambem seja executado.

/*
async function executaPromise(){
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}

executaPromise()*/
//Promisse com Arrow Function
const executaPromise = async () => {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
}