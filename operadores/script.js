// converte para um tipo comum para depois comparar
// == e !=
console.log(`true: ${5 == "5"}`); // compara somente o conteudo (não o tipo)

console.log(`false: ${10 != '10'}`)

console.log(`false: ${5 === '5'}`) // compara o tipo e o conteudo

console.log(`true: ${10 !== '10'}`)

console.log(`"" == false: ${"" == false}`)
console.log(`"" === false: ${"" === false}`)//compara tipo e conteudo

const a = "Maria"
const b = 'Maria'

const x = new String('Maria')
const y = new String('Maria')

console.log(`a === b  = ${a === b}`)
console.log(`a === x  = ${a === x}`)
console.log(`x === y  = ${x === y}`)// são objetos(instancias) diferentes
console.log(`x == y  = ${x == y}`)// são objetos(instancias) diferentes
console.log(`typeof a : ${typeof a}`)
console.log(`typeof x : ${typeof x}`)