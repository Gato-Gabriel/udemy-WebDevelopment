/* 30) ​Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor
valor dentro do vetor. */

function maiorEMenor(vetor=[]){
    let maior=null,menor;
    for(let i=0;i<vetor.length;i++){
        if(i==0){
            maior=vetor[i];
            menor=vetor[i];
        }
        else{
            if(vetor[i]<menor)
                menor = vetor[i];
            if(vetor[i]>maior)
                maior = vetor[i];
        }
    }
    if(maior==null)
        console.log('Não foram encontrados valores!');
    else
        console.log(`O maior valor encontrado foi ${maior}, e o menor, ${menor}`);
}

maiorEMenor([0,1,2,3,4,5,6,7,8,9])
maiorEMenor([5,9,12,13,40,5,6,9,47])
maiorEMenor([])