/* 31) ​Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos
há nesse vetor e imprime a quantidade no console. */

function contaNegativo(vetor=[]){
    let negativos=0;
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]<0)
            negativos++;
    }
    console.log(`Há ${negativos} números negativos no vetor.`)
}

contaNegativo([1,2,0,3,4,3]);
contaNegativo([-1,2,-10,-3,4,-122]);
contaNegativo();