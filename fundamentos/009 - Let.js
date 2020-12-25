/* Definição de variáveis com let */
{
    var numeroqlqr = 1;
    {
        let numeroqlqr = 2;
        console.log("Dentro:"+numeroqlqr);
    }
    console.log("Fora:"+numeroqlqr);   // O 'let' tem escopo de BLOCO, sendo assim, só "existe" naquele bloco.

    let numeroqlqr2 = 1;
    {
        let numeroqualquer = 2;
        console.log("Dentro:"+numeroqlqr2); // Ele sempre prioriza os escopos menores - porém, neste caso, olha o maior, pois não há tal variável naquele escopo.
    }
    console.log("Fora:"+numeroqlqr2);
    // Portanto, variáveis declaradas com 'var' têm escopo de FUNÇÃO e GLOBAL
    // E com 'let', escopo GLOBAL, de FUNÇÃO, e de BLOCO
}

/* Utilizando 'let' em Loop */
{
    for(let i=0;i<10;i++){
        console.log(i)
    }
    //console.log('i=',i);    // A variável não estará visível fora do laço;

    const funcs = [];
    for(let i=0;i<10;i++){
        funcs.push( function(){ console.log(i) }
        )
    }
    funcs[2]();  // Como 'let' tem escopo de bloco, cada índice terá seu espaço.
    funcs[8]();
}