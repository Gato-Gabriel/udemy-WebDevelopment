/* 33) ​Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores
deverá conter quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o
terceiro com valores decimais. Declarados os vetores, utilize a função de união concat() de duas
maneiras diferentes para unir os vetores, e mostre o resultado no console. Todos os elementos do
vetor resultado deverão aparecer no console */

let vetorInteiro=[1,2,3,4];
let vetorString = ['A','B','Gabriel','Teste'];
let vetorDouble = [1.2,4.5,3.33333,2.5];

function uneVetores1(vetor1,vetor2,vetor3){
    const concatenado = vetor1 + vetor2 + vetor3;
    return concatenado;
}

function uneVetores2(vetor1,vetor2,vetor3){
    const concatenado = vetor1.concat(vetor2).concat(vetor3);
    return concatenado;
}

console.log(uneVetores1(vetorInteiro,vetorString,vetorDouble));
console.log(uneVetores2(vetorInteiro,vetorString,vetorDouble));