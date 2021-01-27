/* Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array
como um novo array:
Exemplos:
 receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
 receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16] */

function mudaArray(array=['','']){
    let arrayResultante = [];
    let primeiroItem = array[0];
    let ultimoItem = array[array.length-1];
    arrayResultante.push(primeiroItem,ultimoItem);
    return arrayResultante;
}

console.log(mudaArray([1,2,3]));
console.log(mudaArray([1,2,3,4,5,6,7,8,9]));
console.log(mudaArray(['ado',1,true,{}]));
console.log(mudaArray());