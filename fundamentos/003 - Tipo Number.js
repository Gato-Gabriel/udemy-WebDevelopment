/* Tipos no JavaScript */

/* 1 - Tipo Number */
{
    const peso1 = 1.0;
    const peso2 = Number('2.5');
    console.log(peso1,peso2)
    console.log(Number.isInteger(peso1))
    console.log(Number.isInteger(peso2))
    const avaliacao1 = 9.871;
    const avaliacao2 = 6.871;

    const total = avaliacao1*peso1 + avaliacao2*peso2;
    const media = total / (peso1+peso2);
    console.log(media.toFixed(2))   // Imprime com duas casas decimais
    console.log(media.toString())   // Converte o número para String
    console.log(media.toString(2))   // Converte o número para String EM BINÁRIO
    console.log(typeof media)      // As funções acima não MUDAM o tipo da variável, apenas a transformam
    console.log(Number)     // Função para os tipos number
    // *Alguns cuidados
    console.log(7/0)      // Isto resultará no tipo "Infinity"
    console.log("10"/2)   // Isto resultará em um número, pois ele pega o conteúdo da string e checa se é um número
    console.log("10f"/2)  // Isto, porém, resultará em "NaN"(Not a Number)
    console.log("Show!"*2)  // Idem ao acima
    console.log(0.1 + 0.7)  // A especificação do JS não arredonda para '0.8', para ser um processo mais rápido, sem precisão
    console.log((10).toString)  // Caso seja literal(não esteja contido em uma variável), o número precisa estar entre parênteses
    // Objeto MATH
    const raio = 5.6;
    const area = Math.PI * Math.pow(raio,2);
    console.log(area.toFixed(2));
}
