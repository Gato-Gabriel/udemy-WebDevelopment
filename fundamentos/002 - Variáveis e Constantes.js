/* Variáveis e constantes */
var a = 3;
let b = 4;

var a = 30; // Com o VAR, pode-se redeclarar uma variável
b = 40;     // Com o LET, não.

console.log(a,b)

const c = 5;
// c = 50;  Não se pode reatribuir um valor a uma constante.
console.log(c)

/* JavaScript é uma linguagem de tipagem dinâmica.
 * Sendo assim, é fracamente tipada, podendo alternar
 * os tipos de uma mesma variável (local na memória)
 * ao decorrer da execução.
*/ 
let variavel_teste = 'Frase';
console.log(variavel_teste)
console.log(typeof variavel_teste)

variavel_teste = 50;
console.log(variavel_teste)
console.log(typeof variavel_teste)

// Evite nomes genéricos e siglas na nomeação de variáveis
let valor = 1;
let nome = '';
let php = false;