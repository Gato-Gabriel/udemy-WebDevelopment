/* 32)​ Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros. */

function mediaAritmetica(vetor=[0]){
    let somaTotal=0;
    for(let i=0;i<vetor.length;i++){
        somaTotal+=vetor[i];
    }
    return somaTotal/vetor.length;
}

console.log(mediaAritmetica([2,3]));
console.log(mediaAritmetica([1,2,3,4,5,6,7,8,9]));
console.log(mediaAritmetica([3,3,3,3,3,3,3,3]));
console.log(mediaAritmetica());