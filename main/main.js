class Matematica{
//Método estático não consegue ver o restante da classe, 
//ocasionando a não utilização do constructor
    static soma(a, b){
        return a + b
    }
}

console.log(Matematica.soma(1, 2))