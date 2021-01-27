/* Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será -1. Se o parâmetro
de entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do
tipo ...".
Exemplos:Exercícios - Curso Fundamentos de Programação 2
 inverso(true) // retornará false
 inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"
 inverso(-2000) // retornará 2000
 inverso("programação") // retornará "booleano ou números esperado, mas o parâmetro é do tipo string" */

function retornaInverso(elemento){
    if(typeof elemento === "boolean")  return !elemento;
    else if(typeof elemento === "number")  return elemento*-1;
    else return `Espera-se elemento dos tipos Number ou Boolean, mas o parâmetro é do tipo ${typeof elemento}`;
}

console.log(retornaInverso(true),retornaInverso(false));
console.log(retornaInverso(-1),retornaInverso(1));
console.log(retornaInverso('Frase'));
console.log(retornaInverso());
