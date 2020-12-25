/* Definição de variáveis com var */
{
    {
        {
            {
                {
                    var str_teste = "Será que funciona?";
                    console.log(str_teste);
                }
            }
        }
    }
    console.log(str_teste); // Como o bloco onde a vár. foi definida não é uma função, pode-se enxergá-la fora de seu escopo

    function defineValor(){
        var var1_local=123;
    }
    //console.log(var1_local);   // Todavia, neste caso, a variável foi declarada no escopo da função.
    // É importante evitar utilizar variáveis de escopo global, pois caso haja uma sobrescrição em um escopo menor, todos os outros serão afetados.

    // Outros casos:
    var numeroqualquer = 1;
    {
        var numeroqualquer = 2;
        console.log("Dentro="+numeroqualquer);
    }
    console.log("Fora="+numeroqualquer);
}

/* Utilizando 'var' em Loop */
{
    for(var i=0;i<10;i++){
        console.log(i)
    }
    console.log('i=',i);    // A variável 'i' estará visível fora do laço.

    const funcs = [];
    for(var i=0;i<10;i++){
        funcs.push( function(){ console.log(i) }
        )
    }
    funcs[2]();  // Como 'var' não tem escopo de bloco, i=10 independente da casa.
    funcs[8]();
}