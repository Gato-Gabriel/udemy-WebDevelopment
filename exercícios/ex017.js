/* 17)​ Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano  Aumento
  A      10%
  B      15%
  C      20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e
calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default
que indique que o plano é inválido. */

function calculaPlano(plano='E',salario=0){
    plano = plano.toUpperCase();
    switch(plano){
        case 'A':
            return 1.1*salario;
        case 'B':
            return 1.15*salario;
        case 'C':
            return 1.2*salario;
        default:
            return 'Plano inválido!';
    }
}

console.log(calculaPlano('A',1000));
console.log(calculaPlano('B',1200));
console.log(calculaPlano('C',1700));
console.log(calculaPlano('D',1200));
console.log(calculaPlano('A'));
console.log(calculaPlano());