/* 40) ​Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos
de cada uma de modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja
atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A. */

function conceitos(vetorNotas=[0]){
    let vetorConceitos = [];
    let varConceito='Inexistente';
    for(let i=0;i<vetorNotas.length;i++){
        if(vetorNotas[i]<4.9)
            varConceito = 'D';
        if(vetorNotas[i]>=5.0 && vetorNotas[i]<=6.9)
            varConceito = 'C';
        if(vetorNotas[i]>=7.0 && vetorNotas[i]<=8.9)
            varConceito = 'B';
        if(vetorNotas[i]>=9)
            varConceito = 'A';
        vetorConceitos.push(varConceito);
    }
    return vetorConceitos;
}

console.log(conceitos([0,1.1,2.2,3.3,4.4,5.5,6.6,7,7.7,8.8,9,10]));
console.log(conceitos([0,-2.2,3, ,'teste',null,undefined,' ',9,10]));
console.log(conceitos());