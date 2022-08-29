const elemento = document.getElementById("dados")
const conteudo = elemento.innerHTML.split('\n')
const dados = conteudo.map(x => Number(x))
console.log(conteudo)// string
console.log(dados) // dados

media_ponderada = (dados[0] * 2 + dados[1] * 3 + dados[2] * 5)/10
console.log(`Média Ponderada: ${media_ponderada.toFixed(1)}`)