/* Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um
número que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números
do array que têm a quantidade de dígitos indicada pelo segundo parâmetro.
Exemplos:
 filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2) // retornará [38, 10, 11]
 filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) // retornará [5, 9, 1] */

function filtraPorDigitos(array=[],digito=0){
    let arrayFinal = [];
    array.forEach(num => num<(10**digito) && num>=(10**(digito-1)) ? arrayFinal.push(num):0);
    return arrayFinal;
}

console.log(filtraPorDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtraPorDigitos([5, 9, 1, 125, 11], 1));
console.log(filtraPorDigitos([5, 9, 1, 125, 11]));
console.log(filtraPorDigitos());