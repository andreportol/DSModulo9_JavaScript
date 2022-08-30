const elemento = document.getElementById("dados")
const conteudo = elemento.innerHTML.split("\n")
const dados = conteudo.map(x => Number(x));
let contador = 0;
for (let i = 0; i < dados.length; i++) {
    if (dados[i] >= 10 && dados[i] <= 20) {
        contador ++
    }
}
console.log(`Quantidade de valores entre [10, 20]: ${contador}`)
console.log(`Quantidade de valores fora  [10, 20]: ${dados.length - contador}`)
