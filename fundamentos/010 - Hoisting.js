/* Hoisting */
// Definição literal= "Içar","Içamento","Jogar para cima"
// É exatamente este o efeito de um hoisting.
// Um código é normalmente lido de cima para baixo. Porém, no JS, o interpretador pega variáveis com 'var' e as joga para o começo do programa
{
    // Código com içamento:
    console.log('a=',a);  // Aqui, ele trata 'a' como indefinida, porém EXISTENTE, visto que ela foi içada ao início
    var a=3;
    console.log('a=',a);
    // Mesmo código, por "debaixo dos panos":
    var a;
    console.log('a=',a);
    a=3;
    console.log('a=',a);
    // Hoisting não traz nenhum tipo de benefício, deve-se evitá-lo.

    console.log('b=',b)
    let b=2;    // Com o 'let', o içamento não ocorre
    console.log('b=',b)
}