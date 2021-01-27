/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+"
na quantidade especificada no parâmetro.
Exemplos:
 simboloMais(2) // retornará "++"
 simboloMais(4) // retornará "++++" */

function imprimeSimbolo(num=0){
    let result='';
    for(let i=0;i<num;i++){
        result = result.concat('+');
    }
    return 'Resultado final: '+result;
}

console.log(imprimeSimbolo(2));
console.log(imprimeSimbolo(4));
console.log(imprimeSimbolo(1));
console.log(imprimeSimbolo(5));
console.log(imprimeSimbolo(0));
console.log(imprimeSimbolo(-1));
console.log(imprimeSimbolo());