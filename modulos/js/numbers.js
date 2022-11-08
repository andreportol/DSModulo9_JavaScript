export function sum(num1, num2){
    return num1 + num2;
}
// sem o export a função é privada
export function exp(base, expoente){
    return base ** expoente;
}
// export -> torna publica as funções
export function round(value, precision){
    var multiplier = exp(10, precision || 0);
    return Math.round(value * multiplier)/multiplier
}

/*
Outra maneira de export é retirar o export das funçoes e criar
um export isolado.
    
    function round(value, precision){
        var multiplier = exp(10, precision || 0);
        return Math.round(value * multiplier)/multiplier
    }
    export{sum, round}; funções que serão exportadas


*/

   