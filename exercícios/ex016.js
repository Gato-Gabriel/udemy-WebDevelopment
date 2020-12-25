/* 16)​ Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica
O programa recebe como parâmetros dois valores numéricos e uma string referente à operação
e a realize com os valores numéricos na ordem que foram inseridos. Por exemplo: calculadora
(2, ‘+’, 3). A função efetuará a soma de 2 e 3. Dica: Os sinais das operações são: ‘+’. ‘-’,
‘*’ e ‘/’. Crie um caso default para operações inválidas */

function calculadora(n1=0,sinal='+',n2=0){
    switch(sinal){
        case '+':
            return n1+n2;
        case '-':
            return n1-n2;
        case '*':
            return n1*n2;
        case '/':
            return n1/n2;
        default:
            return 'Operação inválida!';
    }
}

console.log(calculadora(6,'+',8));
console.log(calculadora(2,'-',1));
console.log(calculadora(3,'*',5));
console.log(calculadora(18,'/',9));
console.log(calculadora(3,'x',6));
console.log(calculadora());