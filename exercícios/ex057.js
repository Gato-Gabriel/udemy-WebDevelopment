/* Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.
Exemplos:
 somarNumeros([10, 10, 10]) // retornará 30
 somarNumeros([15, 15, 15, 15]) // retornará 60 */

function somaArray(array=[]){
    let total=0;
    array.forEach(num => total+=num);
    return total;
}

console.log(somaArray([1,2,3,4,5]));
console.log(somaArray([10,10,10]));
console.log(somaArray([15, 15, 15, 15]));
console.log(somaArray([10]));
console.log(somaArray([]));
console.log(somaArray());