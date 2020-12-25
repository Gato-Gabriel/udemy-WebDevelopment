/* Parâmetros Variáveis e Parâmetro Padrão */
// Parâmetros variáveis
{
    function soma(){  // Apesar da função não ter parâmetros, não significa que você não possa passar argumentos em sua chamada.
        let soma = 0;
        for(i in arguments){  // Porém, dentro da função, é possível recuperar tais argumentos com esta propriedade.
            soma += arguments[i];
        }
        return soma;
    }

    console.log(soma());  // Sem argumentos para somar
    console.log(soma(1));
    console.log(soma(1.1,2.2,3.3));
    console.log(soma(2,'teste',35));
    console.log(soma(4,true,7));

}
// Parâmeto Padrão
{
    // Modo 1 de setar valor padrão:
    function soma1(a,b,c){
        a = a || 1;  // Caso uma variável esteja vazia (valor 'undefined'), será tomada como falso, e escolherá o '1' por padrão.
        b = b || 1;
        c = c || 1;
        return a+b+c;
    }
    console.log(soma1(),soma1(3),soma1(1,2,3));
    console.log(soma1(0,0,0));  // Este dará problema - o '0' retorna 'false' por padrão, assim fazendo o parâmetro virar 1.

    // Modo 2 de setar valor padrão:
    function soma2(a,b,c){
        a = (a !== undefined) ? a : 1;
        b = (b !== undefined) ? b : 1;
        c = (c !== undefined) ? c : 1;
        return a+b+c;
    }
    console.log(soma2(5,false,7));
    console.log(soma2(5,7));

    // Modo 3 de setar valor padrão:
    function soma3(a,b,c){
        a = (0 in arguments) ? a : 1;  // Ele basicamente está perguntando se existe um argumento naquele índice (0,1,2)
        b = (1 in arguments) ? b : 1;
        c = (2 in arguments) ? c : 1;
        return a+b+c;
    }
    console.log(soma3(5));

    // Modo 4 de setar valor padrão:
    function soma4(a,b,c){
        a = isNaN(a) ? 1 : a;  // Esta é a mais segura das estratégias, pois neste caso, queremos somar números, não outros tipos de dados;
        b = isNaN(b) ? 1 : b;
        c = isNaN(c) ? 1 : c;
        return a+b+c;
    }
    console.log(soma4(4,false,'string'));

    // Valor padrão do ECMAScript 2015:
    function soma5(a=1,b=1,c=1){
        return a+b+c;
    }
    console.log(soma5(3,4),soma5(3,5,undefined),soma5(),soma5((0,0,0)));
}