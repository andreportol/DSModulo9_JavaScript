// declarando uma função
function soma(num1, num2) {
    return num1 + num2
}
console.log(soma(3, 4))

// outra forma de declarar uma função
const soma2 = function(num1, num2) {
    return num1 + num2
}
console.log(soma2(4, 7))

// outra forma de declarar um função
const soma3 = (num1, num2) => {
    return num1 + num2
}
console.log(soma3(4, 7))

// outra forma de declarar um função
const soma4 = (num1, num2) => num1 + num2
console.log(soma4(5, 7))

const dobro = function (num1) {
    return num1 * 2
}
console.log(dobro(5))

const dobro1 = num => num * 2

console.log(dobro1(6))

// função sem retorno definido retorna undefined

function mostrarPreco(preco){
    console.log(`Preço: ${preco}`)
}
// function hoisting: funções do js são movidas para cima pelo motor do js
// é possível chamar um função e depois criá-la,devido a 
// function hoisting
teste(10)
function teste(x){
    console.log('teste = '+ x)
}

// função de alta ordem
// passando uma função como parâmetro
function aplicar(f, num){
    const valor = f(num)
    console.log('valor = ' + valor)
}
function triplo(num1){
    return num1 * 3
}
aplicar(triplo,8)
aplicar(dobro,7)