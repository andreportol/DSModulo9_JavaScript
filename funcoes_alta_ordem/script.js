const list1 = [1 ,2, 3, 4]
const list2 = []
const nomes = ['Maria', 'Joao', "Anabela"]

/* map: aplica uma função a cada elemento da coleção original,
   retornando uma nova coleção com os elementos alterados*/

function dobro(x){
    return x * 2;
}

function triplo(x){
    return x * 3
}
console.log('MAP************************************')
const m1 = list1.map(dobro)
console.log(m1)

const m2 = list1.map(triplo)
console.log(m2)
// expressão lambda - função anônima
const m3 = list1.map(x => x * 2)
console.log(m3)

console.log('Filter****************************')

// função filter retorna os elementos que retornarem true
function par(x){
    return x % 2 == 0;
}
console.log(list1.filter(par))
//expressão lambda
console.log(list1.filter(x => x % 2 == 0))

const f3 = list1.filter(x => x > 2)
console.log(f3)

// reduce: aplica cumulativamente uma função aos elementos de uma 
//         coleção, retornando o resultado final cumulativo.
//  vc pode informar, opcionalmente, um valor inicial como parâmetro.

function soma (x, y){
    return x + y;
}
function produto (x, y){
    return x * y;
}
console.log('reduce******************')
const r1 = list1.reduce(soma)
console.log(r1)

// list2 vazia precisa inserir um elemento neutro
const r2 = list2.reduce(soma,0)
console.log(r2)

const r3 = list1.reduce(produto)
console.log(r3)

// função sort
// ordena a coleção, conforme a função de comparação
// informada como parâmetro
console.log('sort ************')
const s1 = nomes.sort()
console.log(s1)

// passando um parâmetro de ordenação
function compararPorTamanho(s1, s2){
    return s1.length - s2.length
}
console.log(compararPorTamanho("Anabela", "Joao"))
// função sort altera o array e não cria um novo
const s3 = nomes.sort(compararPorTamanho)
console.log(s3)
// criando uma função lambda
const s5 = [...nomes].sort((x, y) => x.length - y.length);
console.log(s5)
// criando um clone do vetor
const s6 = [...nomes].sort
