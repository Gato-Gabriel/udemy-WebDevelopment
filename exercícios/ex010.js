/* 10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível
por 3 e retorne true ou false. */

function checaDivisaoPor3(num){
    if(num - num.toFixed(0) < 0)  // Arredonda o número caso não seja inteiro
        num = num.toFixed(0)-1;  // Para caso ele arredonde para cima (como nos números 6.8, 7.9, 5.6,...), ele subtrai uma unidade, deixando o número anterior, sem casas decimais.
    else
        num = num.toFixed(0)
    if(num%3==0)
        return true;
    return false;
}

console.log(checaDivisaoPor3(5));
console.log(checaDivisaoPor3(6));
console.log(checaDivisaoPor3(3.4));
console.log(checaDivisaoPor3(6.666666666));
console.log(checaDivisaoPor3(7.8888888888));
console.log(checaDivisaoPor3(0.56785684));