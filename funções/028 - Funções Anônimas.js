/* Funções Anônimas */
// Ao se trabalhar com funções normais, pode-se tanto nomeá-las como criá-las anônimas;
// Ainda, as anônimas podem ser armazenadas dentro de uma variável.
{
    const soma = function(x,y) {  // A variável recebe uma função sem nome, apenas com os parâmetros.
        return x+y;
    }
    const imprimeResultado = function(a,b,operacao=soma){
        console.log(operacao(a,b))
    }
    imprimeResultado(3,4);
    imprimeResultado(3,4,soma);
    imprimeResultado(3,4,function(x,y){
        return x-y;
    });
    imprimeResultado(3,4,(x,y)=>x*y);  // Funções Arrow são sempre anônimas

    const pessoa = {
        falar: function(){  // Também uma função anônima
            console.log("Opa!");
        }
    }
    pessoa.falar();
}