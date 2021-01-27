/* Desenvolva uma função que receba uma string como parâmetro e retorne essa string somente com as
consoantes, ou seja, sem as vogais.
Exemplos:
removerVogais("Cod3r") // retornará "Cd3r"
removerVogais("Fundamentos") // retornará "Fndmnts */

function removeVogais(palavra=''){
    let palavraNova='';
    for(let i=0;i<palavra.length;i++){
        if(palavra[i]!=='a' && palavra[i]!=='e' && palavra[i]!=='i' && palavra[i]!=='o' && palavra[i]!=='u')
            palavraNova = palavraNova.concat(palavra[i]);
    }
    return palavraNova;
}

console.log(removeVogais("Cod3r"));
console.log(removeVogais("Fundamentos"));
console.log(removeVogais("Anticonstituicionalissimamente"));
console.log(removeVogais(""));
console.log(removeVogais());