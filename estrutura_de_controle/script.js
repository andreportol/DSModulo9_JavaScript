const tempo = 02
if( tempo < 12){
    console.log('Boa dia')
} else if(tempo <= 18){
    console.log('Boa tarde')
} else if(tempo < 24){
    console.log('Boa noite')
}

const week = 1
switch(week){
    case 1:
        console.log('Domingo') 
        break;
    case 2:
        console.log('Segunda-feira')
        break
    case 3:
        console.log('Terça-feira') 
        break;
    case 4:
        console.log('Quarta-feira')
        break
    case 5:
        console.log('Quinta-feira') 
        break
    case 6:
        console.log('Sexta-feira')
        break
    case 7:
        console.log('Sábado')
        break
}

let count = 0

while(count < 5){
    console.log(`count: ${count}`)
    count ++
}

let contador = 4

while(contador > 0){
    console.log(`contador: ${contador}`)
    contador --
}

for(i = 0; i < 5; i++){
    console.log(`for: i = ${i}`)
}
let x = 5
do{
    console.log(`x = ${x}`)
    x--
}while(x > 0)