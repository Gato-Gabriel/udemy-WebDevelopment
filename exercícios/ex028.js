/* 28) ​Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares. */

function contaParImpar(vetor=[null]){
    let pares=0,impares=0;
    for(num in vetor){
        if(num%2==0)
            pares++;
        else
            impares++;
    }
    console.log(`Há ${pares} números pares e ${impares} números ímpares no vetor.`);
}

contaParImpar([0,1,2,3,4,5,6,7,8,9]);
contaParImpar([0,1,1,1,0,1,0]);
contaParImpar([2,4,5,7,9]);