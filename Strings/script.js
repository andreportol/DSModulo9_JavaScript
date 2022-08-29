console.log("Uma String literal pode ficar entre aspas duplas.")
console.log('Uma String literal pode ficar entre aspas simples.')
console.log(`Uma String literal pode ficar entre crases`)

console.log('Concatenação e interpolação:')

const num = 14.5;
console.log("O valor do produto é: " + num);
console.log('O valor do produto é: ' + num)
console.log(`O valor do produto é: ${num}`)

const str1 = num.toString(); // convertendo o numero em String
console.log(`Tipo de ${str1}: ${typeof str1}`)

const str2 = num.toFixed(2); // converte para String com 2 casas decimais
console.log(`Tipo de ${str2}: ${typeof str2}`)
const num1 = Number("20.56")
console.log(`Tipo de ${num1}: ${typeof num1}`)

const num2 = parseInt("21", 10) // convertendo uma String na base 10 para numero 
console.log(`Tipo de ${num2}: ${typeof num2}`)

const num3 = parseInt("21", 16) // convertendo uma String na base 16 para numero na base 10
console.log(`Tipo de ${num3}: ${typeof num3}`)

const num4 = parseFloat("21.34", 10) // convertendo uma String na base 10 para numero na base 10
console.log(`Tipo de ${num4}: ${typeof num4}`)

