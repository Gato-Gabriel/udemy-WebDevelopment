/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a
função) e com ponto de exclamação "!" no final. */
/* NOTA: Este exercício e seus adjacentes pertencem a uma segunda lista de exercícios passada pelo curso após o capítulo de arrays, contendo exercícios do fácil ao intermediário. */

const cumprimenta = (frase='') => `Olá ${frase}!`;
console.log(cumprimenta('Leonardo'));
console.log(cumprimenta('Maria'));
console.log(cumprimenta());