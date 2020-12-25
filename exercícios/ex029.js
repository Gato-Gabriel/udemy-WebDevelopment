/* 29) ​Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte
quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou
seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações. */

function contaIntervalo(vetor=[]){
    let contaDentro=0,contaFora=0
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]>=10 && vetor[i]<=20)
            contaDentro++;
        else
            contaFora++;
    }
    console.log(`Números entre 10 e 20: ${contaDentro}; Números fora do intervalo: ${contaFora}`);
}

contaIntervalo([2,3,5,65,13,12,4,5,17,18,19,20]);
contaIntervalo([2,1,12,4,5,17,19,21]);
contaIntervalo();