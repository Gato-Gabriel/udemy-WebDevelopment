/* Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
 maiorOuIgual(0, 0) // retornará true
 maiorOuIgual(0, "0") // retornará false
 maiorOuIgual(5, 1) // retornará false 
*/

const compara = (num1=0,num2=1) => (num1>=num2)?true:false;

console.log(compara(2,1));
console.log(compara(-5,6));
console.log(compara(0,0));
console.log(compara(1,'2'));
console.log(compara());
console.log(compara(1));
