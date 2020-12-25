/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a
soma, subtração, multiplicação e divisão desses valores. */

function opera(a,b){
    console.log('Números',a,'e',b);
    console.log(`Soma: ${a+b}`);
    console.log(`Subtração: ${a-b}`);
    console.log(`Multiplicação: ${(a*b).toFixed(2)}`);
    console.log(`Divisão: ${(a/b).toFixed(2)}`);
    console.log('----------------------')
}
opera(2,3);
opera(5,4)
opera(10,2)
