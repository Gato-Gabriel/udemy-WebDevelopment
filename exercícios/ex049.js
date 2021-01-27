/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá,
enquanto que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
 repetir("código", 2) // retornará ["código", "código"]
 repetir(7, 3) // retornará [7, 7, 7] */

function repete(item,vezes=1){
    let vetorResultado = []
    if(item===undefined) return vetorResultado;  // Caso não seja passado parâmetro, ele retornará o vetor vazio.
    for(let i=0;i<vezes;i++)
        vetorResultado.push(item);
    return vetorResultado;
}

console.log(repete('Frase',2));
console.log(repete(7,5));
console.log(repete('Frase',-1));
console.log(repete('Frase'));
console.log(repete());