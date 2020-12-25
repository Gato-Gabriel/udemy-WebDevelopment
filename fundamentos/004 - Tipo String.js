/* Tipos no JavaScript */

/* 2 - Tipo String */
{
    var meu_nome = "Gabriel";
    var nome_dela = 'Bianca';
    var prof_nome = `Leandro`;  // Se usa crase (` `) para Template Strings
    var idade = 16;
    console.log(meu_nome.charAt(4));    // Mostra o caractere em uma determinada posição da String
    console.log(meu_nome.charAt(89));   // Retornará uma casa vazia
    console.log(prof_nome.charCodeAt(1));   // Retorna o valor do caractere na tabela ASCII
    console.log(prof_nome.indexOf('n'));    // Retorna a posição de um determinado caractere na String
    console.log(nome_dela.indexOf('a'));    // Retornará o primeiro encontrado, neste caso

    console.log(nome_dela.substring(2));   // Gera uma nova string a partir de um certo índice da String
    console.log(nome_dela.substring(0,3));   // Idem ao anterior, porém delimita as posições(não inclui o último delimitado)
    
    console.log(meu_nome.concat(" é o meu nome, e minha idade é ").concat(idade));    // Concatena strings, e até variáveis.
    console.log("Minha melhor amiga se chama ".concat(nome_dela).concat("!"));
    console.log("Minha melhor amiga se chama " + nome_dela + "!");
    console.log("Eu tenho aula com o professor ".concat(prof_nome).concat(" na Udemy!"));
    console.log("3" + 2);   // Retorna string, diferente das outras operações matemáticas

    console.log(nome_dela.replace("ca",'k'));
    console.log(nome_dela)  // O ".replace" não altera a string original, apenas a substitui

    console.log('Zezinho,Pedrinho,Luizinho'.split(","));    // Separa a string a partir de um certo caractere, e forma um Array com os elementos resultantes

    // *Template Strings
    const nome_teste = "Marilene";
    const concatenacao = "Olá " + nome_teste + "!";
    const template_string = ` 
      Olá
    ${nome_teste}!`;     // As template Strings consideram tabulações e quebras de linhas
    console.log(concatenacao,template_string);
    console.log(`1 + 1 = ${1+1}`);

    const emMaiusculo = texto => texto.toUpperCase();
    console.log(`JavaScript é a melhor ${emMaiusculo("linguagem")}!`)
}