/* IIFE - Função Auto-Invocada */
// IIFE -> Immediately Invoked Function Expression
// É uma função auto-invocada, delcarada anonimamente,e que em sua declaração ela já é chamada,executada.
// Uma das vantagens de uma IIFE é no browser, quando se quer fugir do escopo global e de manipular coisas por lá, principalmente para evitar bugs ao esbarrar em variáveis globais.
{
    (function(){
        var a = 9;
        let b = false;
        const c = 'Teste';  // Todas estas ficarão no escopo desta função apenas.
        console.log('Será executado na hora!');
        console.log("Foge do escopo mais abrangente");
        // window.a = 'Algo' -> Neste caso, estarei acessando o escopo global.
    })()
   // ↑ Chama a função após sua definição
}