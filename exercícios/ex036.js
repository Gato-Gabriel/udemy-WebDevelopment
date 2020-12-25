/* 36) ​Crie duas funções que recebem dois parâmetros, um vetor com apenas valores
numéricos e um número inteiro. Faça com que a primeira função retorne outro vetor
que será resultado da multiplicação de cada elemento pelo número passado como
parâmetro. A segunda função fará o mesmo da primeira se e somente se o valor do
elemento for maior que 5. */

function func1(vetor=[],num=0){
    let vetorResultado=[];
    for(let i=0;i<vetor.length;i++){
        vetorResultado.push(vetor[i]*num);
        console.log(vetorResultado)
    }
    return vetorResultado;
}

function func2(vetor=[],num=0){
    let vetorResultado=[];
    for(let i=0;i<vetor.length;i++){
        if(vetor[i]>5)
            vetorResultado.push(vetor[i]*num);
    }
    return vetorResultado;
}

console.log(func1([1,3,5,6,9,2,13,14,0,10],3),func2([1,3,5,6,9,2,13,14,0,10],3));
console.log(func1([1,2,3,4,5,6,7,8,9,0],3),func2([1,2,3,4,5,6,7,8,9,0],3));