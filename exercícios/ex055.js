/* Elabore uma função que receba um array de números e retorne um array que tenha todos os números
que são pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão
dele por 2 é zero.
Exemplos:
 receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
 receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]
*/

function retornaPar(array=[]){
    let vetorResultante = [];
    for(let i=0;i<array.length;i++)
        if(array[i]%2===0 && i%2===0)
            vetorResultante.push(array[i]);
    return vetorResultante;
}

console.log(retornaPar([0,1,2,3,4,5,6]));
console.log(retornaPar([1,2,3,4,5,6]));
console.log(retornaPar([1,3,5,7,9,11]));
console.log(retornaPar([2,4,6,8,10,12]));
console.log(retornaPar([]));
console.log(retornaPar());