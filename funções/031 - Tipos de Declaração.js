/* Tipos/Formas de declaração de funções */
{
    // "Function declaration" - Forma tradicional:
    function soma(x,y){
        return x+y;
    }
    // A vantagem desta forma é que sua função pode ser chamada antes mesmo de ser declarada, pois o interpretador do JavaScript lê todas as funções e as carrega primeiro, deixando-as preparadas para então executar o código.

    // "Function Expression" - Declarando uma função anônima e atribuindo a uma variável:
    const sum = function(x,y){
        return x+y;
    }

    // "Named Function Expression" - Une os dois conceitos anteriores, atribuindo uma função nomeada a uma variável:
    const mult = function mult(x,y){
        return x*y;
    }
    // A vantagem desta bem pouco usada construção, é que o nome dado à função aparece na debugagem, ao invés de ser dada como anônima
}