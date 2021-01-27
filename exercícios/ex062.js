/* Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função deverá retornar se o parâmetro de entrada foi igual ao número
sorteado internamente. Se o valor fornecido foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se
não for igual, retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
Exemplos:
 funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
 funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
 funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1" */

function sorteiaNumero(escolha=0){
    let sorteado = Math.floor(Math.random() *10 +1);
    if(escolha===sorteado) return 'Parabéns! O número sorteado foi o '+sorteado;
    return 'Que pena! O número sorteado foi o '+sorteado;
}

console.log(sorteiaNumero(5));
console.log(sorteiaNumero(5));
console.log(sorteiaNumero(5));
console.log(sorteiaNumero(4));
console.log(sorteiaNumero(10));
console.log(sorteiaNumero());

