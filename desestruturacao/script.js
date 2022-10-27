obj = {
    id: 53,
    date: "2021-10-20",
    itens: [
        {
            description: "celular",
            price: 1499.99,
            quantity: 1
        },
        {
            description: "mouse",
            price: 100.0,
            quantity: 2
        }
    ],
    client:{
        name: "Maria Red",
        email: "maria@gmail.com",
        active: true
    }
}
// desestruturação
let {id, client} = obj
console.log(id)
id = 10
console.log(id)
console.log(client)
console.log(obj)

// desestruturação como argumento de uma função
function subTotal({price, quantity}){
    return price * quantity
}
console.log(subTotal(obj.itens[1]))


function total({itens}){
    soma = 0
    for(i = 0; i < itens.length; i++){
        soma = soma + subTotal(itens[i])
    }
    return soma
}

console.log(total(obj))

const [item1, item2] = obj.itens
console.log(item1)
console.log(item2)