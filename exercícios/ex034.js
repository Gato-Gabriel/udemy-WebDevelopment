/* 34)​ Construa uma função que receberá duas Strings de tamanhos variados e que retornar
True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo)
estejam contidos em ambas palavras. */

function checaString(string1=[''],string2=['']){
    let stringMaior;
    if(string1.length>string2.length)   // Checa qual das strings é maior para usar seu comprimento de molde
        stringMaior = string1;
    else
        stringMaior = string2;
    let eIgual=true;    // Começa considerando as duas como iguais
    for(let i=0;i<stringMaior.length;i++){  // Percorre cada letra da string, comparando com a outra
        if(string1[i]!=string2[i])    // Caso uma letra seja diferente nas posições, ele tornará a variável 'falsa'
            eIgual = false;
    }
    return eIgual;
}

console.log(checaString('teste','teste'));
console.log(checaString('gabriel','gabriel'));
console.log(checaString('teste','teset'));
console.log(checaString('aba','abacate'));
console.log(checaString());