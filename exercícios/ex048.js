/* Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero)
e realize a multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
 multiplicar(5, 5) // retornará 25
 multiplicar(0, 7) // retornará 0 */

function multiplica(n1=0,n2=0){
    if(n1<0 || n2<0) return 'Espera-se apenas números positivos!'
    let valorInicial=n1;
    for(let i=1;i<n2;i++){  // O contador começa do '1' pois o número em si já está, na teoria, multiplicado uma vez. (5 = 5*1, 7 = 7*1, etc.)
        n1+=valorInicial;
    }
    return n1;
}

console.log(multiplica(5,5));
console.log(multiplica(6,7));
console.log(multiplica(5));
console.log(multiplica(0.5,2));   // Número real apenas para teste
console.log(multiplica());