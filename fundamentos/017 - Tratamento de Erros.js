/* Tratamento de possíveis erros */

// Try
{
    /* function imprimirGritando(obj){
        console.log(obj.nome.toUpperCase() + '!!!');
    }  // Perceba que estou tentando acessar o atributo 'nome'
    const obj1 = { name:'Ronaldo' }; // Perceba que estou utilizando 'name'
    imprimirGritando(obj1);  // Neste caso, ele dirá que está tentando dar UpperCase em algo 'undefined'
     */
    // *Código com Try/Catch/Throw:
    function tratarErro(erro){  // Aqui é onde se "lança" o retorno do erro
        throw new Error("Ocorreu um erro no sistema!");
        //throw 10;
        //throw true;
        //throw 'mensagem';
        /* throw {
            nome: erro.nome,
            msg: erro.message,
            data: new Date
        } */
    }
    function imprimirGritando(obj){
        try{  // 'try' é um bloco de código, onde dentro vão códigos que podem ser julgados como "errados".
          console.log(obj.nome.toUpperCase() + '!!!');  
        } catch(e){ // Gerada alguma exceção dentro do bloco de código do 'try', cairá dentro do 'catch'
            // Dentro deste, pode-se tentar tratar aquele erro - mostrar uma mensagem ao usuário, tratar o erro, etc.
            tratarErro(e);
        } finally {  // Este é um bloco que é sempre executado, independente se houve erro ou não;
            console.log("Acabou!");
        }
        
    }
    const obj1 = { name:'Ronaldo' };
    imprimirGritando(obj1);

    // *O ideal é sempre mandar uma mensagem simples, que faça sentido, seja compreensível, e não assuste o usuário;
}