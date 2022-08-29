const elemento = document.getElementById("dados")// recupera os elementos
const conteudo = elemento.innerHTML.split('\n')// coloca os elementos dentro de um array
const dados = conteudo.map(x => Number(x)); // transforma o conteudo String em Numeric

console.log(dados);
let maior_numero = 0;
for(i = 0; i < dados.length; i++){
    if(maior_numero < dados[i]){
        maior_numero = dados[i]
    }
}
console.log(`Maior número do array: ${maior_numero}`)