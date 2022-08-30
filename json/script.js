// padrão json
// JavaScript object notation 

/* JSON -> formato universal de representação de dados
           na forma de texto. 
           Ele é utilizado em outras linguagens de programação*/

// padrão universal
const obj1 = {
    "name" : "computador",
    "price" : 50.9,
    "due-date": "2025-04-15"
}

// padrão JavaScript
const obj2 = {
    name : "computador",
    price : 50.9,
    "due-date": "2025-04-15"
}

obj3 = {
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
console.log(obj1)
console.log(obj2)
console.log(obj3)
console.log(obj3.id)
console.log(obj3.itens)
console.log(obj3.itens[0].description)

// formato String
const txt = `{"name": "computador", "price": 50.9, "due-date": "30-08-2022"}`;
console.log(typeof(txt));

// transformando String em objeto
const objeto1 = JSON.parse(txt);
console.log(typeof(objeto1))

// transformando objeto em String
const toString = JSON.stringify(objeto1)
console.log(typeof(toString))