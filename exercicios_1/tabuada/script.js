const elemento = document.getElementById("dados")
const conteudo = elemento.innerHTML.split("\n")
const dados = conteudo.map(x => Number(x))

for(let i = 0; i < 11; i++){
    console.log(`${dados[0]} x ${i} = ${dados[0] * i} `)
}