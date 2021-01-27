/* Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade
de vezes que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá
diferenciar maiúsculas de minúsculas.
Exemplos:
contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1 */

function contaCaractere(crct=1,frase=''){   // Como padrão para o caractere, pode-se botar qualquer variável que não seja uma string para que a função retorne '0'.
    let contador=0;
    for(let i=0;i<frase.length;i++)
        if(frase[i]===crct) contador++;
    return contador;
}

console.log(contaCaractere('r',"A sorte favorece os audazes"));
console.log(contaCaractere("c", "Conhece-te a ti mesmo"));
console.log(contaCaractere("I", "Anticonstituicionalissimamente"));
console.log(contaCaractere("", "Paralelepípedo"));
console.log(contaCaractere('a'));
console.log(contaCaractere());