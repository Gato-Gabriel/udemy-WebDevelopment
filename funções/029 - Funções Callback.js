/* Funções Callback */
// A idéia do callback é a de passar uma função a uma outra função, e quando determinado evento acontecer, esta função passada seja disparada, chamada de volta.
// Esta função callback pode ser chamada várias vezes, ou apenas uma única, a depender do contexto de chamada da mesma.
{
    const fabricantes = ['Mercedes','Volkswagem','BMW'];
    function imprime(nome,indice){
        console.log(`${indice+1} - ${nome}`)
    }
    fabricantes.forEach(imprime);  // Para cada item do Array, ele chamará a função
    fabricantes.forEach(function(a){
        console.log(a);    // O valor de 'a', nesta função, é cada um dos elementos do Array.
    })
    //fabricantes.forEach(fabricante => console.log(fabricante)); // Idem ao acima

    // Neste caso, o evento que aconteceu foi justamente o loop - Ao encontrar um novo elemento no array, ele dispara um evento(no caso, a função 'imprime')
    // O evento então foi justamente encontrar cada item do vetor, assim chamando o callback.
    
    // Outro evento bastante comum de se encontrar é o da chamada Ajax, para o servidor
    // Ao se fazer uma requisição Ajax, se vai ao servidor, e passa para essa requisição um callback que será chamado quando esta resposta chegar, seja ela de sucesso ou de erro.
}

// Vantagens do Callback
{
    const notas = [7.7,6.8,9.9,8.6,5.4,3.4];
    // Abordagem sem callback:
    let notasBaixas = []
    for (let i in notas){
        if(notas[i]<7)
            notasBaixas.push(notas[i]);
    }
    console.log(notasBaixas);

    // Abordagem com callback:
    notasBaixas = notas.filter(nota => (nota < 7))   // 'filter': filtra os elementos de um Array sobre um determinado critério
    console.log(notasBaixas);
    // Neste caso, o evento é chamado para toda nota(emelmento) do vetor.
}

// Exemplo de callback no browser
{
    document.getElementsByTagName('body')[0].onclick = function(e){
        console.log('O evento ocorreu!');
    }
    // A resposta do 'getElementsByTagName' é um Array, então acesso um índice em específico - neste caso, o primeiro, pois só há um 'body' na página.
    // Com o 'onclick', atribuo uma Callback chamada sempre que o usuário clicar no 'body'.
}