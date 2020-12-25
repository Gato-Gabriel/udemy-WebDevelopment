/* 12)​ Faça um algoritmo que calcule o fatorial de um número. */

function fatorial(num){
    let n = num;
    for(let i=1;i<n;i++){
        num*=i;
    }
    return num;
}

console.log(fatorial(7));
console.log(fatorial(6));
console.log(fatorial(5));
console.log(fatorial(4));