/* 38) ​Escreva uma função que receba dois parâmetros início e fim. Essa função deve imprimir
todos os números ímpares que estão entre esses valores. Por padrão os valores devem ser 0
para início e 100 para fim. Atente para corrigir a ordem dos parâmetros caso a função receba
o valor maior antes do menor. */

function imprimeImpar(i=0,f=100){
    let maior,menor;
    let vetorImpares=[];
    if(i>f){
        maior=i;
        menor=f;
    }
    else{
        maior=f;
        menor=i;
    }
    menor++;   // Apenas ímpares ENTRE os números de início e fim
    for(menor;menor<maior;menor++){
        if(menor%2!=0)
            vetorImpares.push(menor);
    }
    return vetorImpares;
}

console.log(imprimeImpar(0,10));
console.log(imprimeImpar(40,59));
console.log(imprimeImpar());
console.log(imprimeImpar(7,6));