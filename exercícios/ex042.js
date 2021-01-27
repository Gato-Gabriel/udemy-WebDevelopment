/* Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias.
Obs: considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e dias decorridos desde o último aniversário.*/

const converteIdade = (idade=0) => idade*365;
console.log(converteIdade(25));
console.log(converteIdade(70));
console.log(converteIdade(1));
console.log(converteIdade());
