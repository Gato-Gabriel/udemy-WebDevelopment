/* Tipos no JavaScript */
/* 7 - Funções */
// Funções exercem o papel central no JavaScript.
// Funções sem atribuição:
/* {
    // Função sem retorno:
    function mostraSoma(a,b){  // Para os parâmetros, não é necessário usar var/let/const, e eles podem ser de qualquer tipo.
        console.log(a + b);
    }
    mostraSoma(2,3);
    mostraSoma(2);  // Isso fará com que 'b' seja undefined, retornando assim "NaN".
    mostraSoma();   // Idem ao acima, mas todos os parâmetros serão "undefined".
    mostraSoma(2,3,4,5,6,7,8)  // Funcionará normalmente, mas usará os argumentos que coincidem com os parâmetros.
    
    // Função com retorno:
    function imprimeSoma(a=0,b=0){   // 'a' e 'b' serão 0 apenas se nenhum argumento for passado em seus lugares.
        return a+b;
    }
    console.log(imprimeSoma(2,3));
    console.log(imprimeSoma(2));
} */

// Funções atribuídas a uma variável:
{
    const mostraSoma = function(a,b){  // Função anônima(sem nome) - quem recebe nome é a variável/constante
        console.log(a+b);
    }
    mostraSoma(2,3);

    // Função Arrow:
    const imprimeSoma = (a,b) => {  // Retorno Explícito
        return a+b;
    }
    console.log(imprimeSoma(2,3))

    const subtracao = (a,b) => a-b; // Retorno Implícito*
    console.log(subtracao(4,3));
    // *Caso seja apenas um parâmetro, pode-se retirar os parênteses em volta.
}