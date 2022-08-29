const x = 10;
if (x > 0){
    var a = 100; // Não é recomendavel seu uso(var) "faça pelo escopo"
    let b = 200; // é utilizado para variaveis que terão seus valores alterados
    const c = 300;// recomendavel o uso para variaveis que não terão seus valores alterados
    console.log('imprimindo dentro do escopo if:')
    console.log(a)
    console.log(b)
    console.log(c)
}
console.log('imprimindo fora do escopo if:')
    console.log(a)
    //console.log(b)  - só existem dentro do escopo if
    // console.log(c)

for(let i = 0; i < 5; i++){
    console.log(i)
}