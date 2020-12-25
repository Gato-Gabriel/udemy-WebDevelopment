/* Estrutura IF */
// Com apenas uma condição
{
    function teste1(num){
        if(num>7)  // Neste caso, sem as chaves, a condição executará apenas o primeiro
            console.log(num);
            console.log('Fim!');
    }
    teste1(6);
    teste1(8);

    function teste2(num){
        if(num>7);{
            console.log(num);
        } // Neste caso, é como se o 'if' estivesse associado a um comando vazio(terminado por ';'), e as chaves definissem um bloco qualquer.
    }
    teste2(6);
    teste2(8);
}

// Com ELSE
{
    const estaAprovado = function(nota){
        if(nota>=7)  return true;
        return false;
    }
    let nota = 6;
    nota = 'Epa Neném!;'
    if(estaAprovado(nota))
        console.log('Parabéns, você passou!');
    else
        console.log('Você reprovou, tente novamente.');
}

// Com ELSE + IF's
{
    Number.prototype.entre = function(inicio,fim){
        return this>=inicio && this<=fim  // (Essa própria sentença retornará true ou false)
    }
    const imprimeResultado = function(nota) {
        if(nota.entre(9,10))
            console.log('Quadro de Honra');
        else if(nota.entre(7,8.99))
            console.log('Aprovado');
        else if(nota.entre(4,6.99))
            console.log('Recuperação');
        else if(nota.entre(0,3.99))
            console.log('Reprovado');
        else
            console.log('Nota inválida');
    }

    imprimeResultado(11);
    imprimeResultado(10);
    imprimeResultado(7.5);
    imprimeResultado(5);
    imprimeResultado(1);
    imprimeResultado(0);
    imprimeResultado(-1);
}
