/* 22)​ Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função
recebe como parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga
e o valor da anuidade. A anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros
(sob o regime de juros compostos). O retorno deve ser o valor a ser pago para o respectivo mês
escolhido. */

function anuidade(mes,valor){
    let tempo=mes-1,taxa=0.05;  // O atraso é calculado a cada mes que se passa, logo, se subtrai uma unidade do mês dado.
    let resultado = valor * (1+taxa)**tempo
    return `R$ ${resultado.toFixed(2)}`
}

console.log(anuidade(1,1000));
console.log(anuidade(5,1000));
console.log(anuidade(6,1000));
console.log(anuidade(10,1000));
console.log(anuidade(12,1000));