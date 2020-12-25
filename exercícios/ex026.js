/* 26)​ Fazer um programa para encontrar todos os pares entre 1 e 100. */

let numsPares = [];     // Vetor que armazena os números pares.
for(let i=1;i<=100;i++){
    if(i%2==0)
        numsPares.push(i);  // Caso o número seja par, adiciona ele ao Array.
}

console.log(numsPares)