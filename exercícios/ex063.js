/* Criar uma função que receba uma string como parâmetro e conte quantas palavras tem nela.
📕 Considere que todas as palavras só são separadas por um espaço.
Exemplos:
 contarPalavras("Sou uma frase") // retornará 3
 contarPalavras("Me divirto aprendendo a programar") // retornará 5 */

function contaPalavras(frase=''){
    let contador=0;
    for(let i=0;i<frase.length;i++)
        if(frase[i]==' ') contador++
    if(frase.length>0) contador++;  // Caso a frase não seja vazia
    return 'A frase tem '+ contador +' palavras.';
}

console.log(contaPalavras('Diga lá meu parceiro'));
console.log(contaPalavras('Sou uma frase'));
console.log(contaPalavras('Me divirto aprendendo a programar'));
console.log(contaPalavras(''));
console.log(contaPalavras());