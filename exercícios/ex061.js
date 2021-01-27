/* Criar uma função que receba um array de números e retorne o menor número desse array.
Exemplos:
menorNumero([10, 5, 35, 65]) // retornará 5
menorNumero([5, -15, 50, 3]) // retornará -15 */

function achaMenorNum(array=[0]){
    let menorNum=0;  // Apenas zero a variável para não ser tomada como 'undefined', mas seu valor é logo mudado no laço 'for'.
    for(let i=0;i<array.length;i++){
        if(i===0 && (typeof array[i])==='number') menorNum=array[i];   // Condição  extra para caso um array de elementos não-numéricos seja passado
        else menorNum = array[i]<menorNum ? array[i] : menorNum;
    }
    return menorNum;
}

console.log(achaMenorNum([10,5,35,65]));
console.log(achaMenorNum([5,-15,50,3]));
console.log(achaMenorNum([4,4,4,4,4]));
console.log(achaMenorNum(['a','b','c',true,null]));
console.log(achaMenorNum([]));
console.log(achaMenorNum());