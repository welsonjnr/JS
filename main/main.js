function soma(a = 3, b= 6){
    return a + b 
}

const sum = (a = 3, b = 6) => a + b

console.log(soma(1))
console.log(soma())

console.log(sum(0))
console.log(sum(2))