const elemento = document.getElementById("dados")// recupera os elementos
const conteudo = elemento.innerHTML.split('\n')// coloca os elementos dentro de um array
const dados = conteudo.map(x => Number(x)); // transforma o conteudo String em Numeric

let contador = 0;
let soma = 0
for (let i = 0; i < dados.length; i++) {
    if (dados[i] > 0){
        soma += dados[i]
        contador ++
    }
}
if(contador == 0){
    console.log('Impossível calcular!')
}else{
    console.log(`Média aritmética: ${(soma/contador).toFixed(2)}`)
}
