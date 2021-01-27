/* A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes nos anos normais.
Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele
é bissexto ou não.
Exemplos:
 checarAnoBissexto(2020) // retornará true
 checarAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400 */

function checaBissexto(ano=0){
    if(ano%400===0) return true
    if(ano%100===0) return false
    if(ano%4===0) return true
    return false;
}

console.log(checaBissexto(2020));
console.log(checaBissexto(2100));
console.log(checaBissexto(2020));
console.log(checaBissexto(0));
console.log(checaBissexto(20));
console.log(checaBissexto(19));
console.log(checaBissexto());