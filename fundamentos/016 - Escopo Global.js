/* Contexto de Execução */
/*  Caso estivéssemos executando no Front-End, o objeto de escopo global seria o 'window', a janela do navegador.
    Já no caso do Back-End, com o Node, por exemplo, o escopo de maior contexto seria o próprio 'global'
*/
{
    let a = 123;  // Ao se criar uma variável desta maneira, ela fica local dentro do arquivo, não é exportada(não fica global)
    global.b = 5;
    this.c = 9;

    console.log(this.a);
    console.log(global.b);
    console.log(this.c);
    console.log(module.exports.c);
    console.log(module.exports === this);
    // Dentro do Node, cada arquivo é um módulo, diferente de na Web, onde todos os arquivos se juntam, e tudo disputa pelo escopo global;
    this.d = true;
    this.e = 'Teste';
    console.log(module.exports);  // * Dentro de um arquivo, o 'this' é o "module.exports".
    // module.exports = { c: 9, d: true, e: 'Teste' };  // Este é o comum de se observar no Node.js;

    abc = 'Algo';  // Neste caso, criei uma variável global(não precisei de var/let/const). Não faça isso.
    console.log(global.abc);
    // Ao se criar desta maneira, pode-se sobrescrever uma variável global, o que é algo péssimo.
}