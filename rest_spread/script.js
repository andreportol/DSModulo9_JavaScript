// Rest -> Valores passados com vírgula, serão convertidos
// em array.
// "..." operador do rest
function sum(...numbers){
    let total = 0
    for(let i = 0; i < numbers.length; i++){
        total = total + numbers[i];
    }
    return total
}

console.log(sum(1, 8, 9, 5 ,6))

// Spread -> retira os elementos do array e retorna-os separados pela vírgula.

const myNumbers = [2, 3, 10, 5]
// A função Math só aceita números separados pela vírgula. Não aceita vetores
const result3 = Math.max(...myNumbers);
console.log(result3)

const item = {
    description: "computador",
    price: 3000,
    quantity: 1
}
// copia o objeto item para o cloneItem, criando um novo objeto
// diferentemente de uma refêrencia (que aponta para o obejto)
const cloneItem = {...item}
console.log(cloneItem)

const cloneItemPlus = {...item, weight:10}
console.log(cloneItemPlus)