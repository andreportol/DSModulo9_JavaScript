const str1 = "Maria Silva";
const str2 = str1.toLowerCase();
console.log(`toLowerCase: ${str2}`)

const str3 = str1.toUpperCase()
console.log(`toUpperCase: ${str3}`)

const str4 = str1.charAt(3)
console.log(`charAt(3) ${str4}`)

console.log(`replace: ${str1.replace("i","$")}`) // troca somente 0 primeiro "i"

console.log(`replace: ${str1.replace(/i/g,"$")}`) // troca todos os "i"s

console.log(`lenght: ${str1.length}`)

console.log(`indexOf: ${str1.indexOf("i")}`)

console.log(`lastIndexOf: ${str1.lastIndexOf("i")}`)

console.log(`substring: ${str1.substring(3, 8)}`) // mostra as strings de 3 a 8

const data = "26/08/2022"
console.log(`mes: ${data.substring(3, 5)}`) // formato String

console.log(`mes: ${Number(data.substring(3, 5))}`) // formato número

const num1 = "200.99"
console.log(`Alterando o ponto pela virgula: ${(num1.replace(".", ",")).valueOf()}`)

const nome = "  Andre luzardo Porto   "
console.log(`Sem trim(): ${nome}`)
console.log(`trim(): ${nome.trim()}`)// elimina os espaços do inicio e do final da String