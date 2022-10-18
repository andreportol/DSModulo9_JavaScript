
// tamanho do array
const valores = ['Maria', 8, true, 1.64]
t1 = valores.length;
console.log(`tamanho do array: ${t1}`)

// remover elemento do array

const nomes = ['Maria', 'Joao', 'Ana', 'Marcos']
const r1 = nomes.pop();// remove o ultimo elemento do array
console.log(r1)
console.log(nomes)

const r2 = nomes.shift() // remove o primeiro elemento do array
console.log(r2)
console.log(nomes)

//inserindo elemento em um array

const alturas = [1.8, 2.0, 1.65]
alturas.push(1.55) // insere um elemento no final do array
console.log(alturas)

// inserindo um elemento no inicio do array
alturas.unshift(1.77)
console.log(alturas)

//concatenar arrays
const meninos = ['Andre', 'Thor']
const meninas = ['Thaisa', 'Lavinia', 'Rebeca']

todos = meninos.concat(meninas)
console.log(`Concat arrays: ${todos}`)

// inserir e remover geral
const letras = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(letras)

letras.splice(2, 3)
console.log(`splice = ${letras}`) // remove (3)elementos a partir do 2 elemento; 

// inserindo elementos no array apartir dos elementos deletados
// apartir do 2 elemento remova 1 e insira as letras no lugar dos elementos removidos
letras.splice(2, 1, "G", "H", "I") //[A, B, G, H, I]
console.log(letras)

// acessando elementos
const idades = [20, 30, 40, 50]
console.log(idades[1])
// alterando elementos

idades[3] = 60
console.log(idades[3])

// percorrendo um array
console.log(`percorrendo o array idades:`)
for (let i = 0; i < idades.length; i++) {
    console.log(`${idades[i]}`)
}

// percorrer um array com o for each

frutas = ['banana', 'laranja', 'uva'];
console.log('Teste percorrendo um array com foreach.')
frutas.forEach(item => {
    console.log(item)
});