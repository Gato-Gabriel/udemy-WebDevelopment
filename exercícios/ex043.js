/* Desenvolva uma função que recebe dois parâmetros: é a quantidade de horas trabalhadas por
um funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string
"Salário igual a R$ X", em que X é o quanto o funcionário ganhou no mês. */

const calculaSalario = (horas=0,recebePorHora=0) => `Salário igual a R$ ${horas*recebePorHora}`

console.log(calculaSalario(260,16));
console.log(calculaSalario(150,40.5));
console.log(calculaSalario(260));
console.log(calculaSalario());