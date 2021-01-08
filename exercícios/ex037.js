/* 37) ​Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica
que recebam como parâmetros um número n (número de termo), ​a1​ (o primeiro termo) e ​r​ (a razão)
e escreva os ​n​ termos, bem como a soma dos elementos. */

function progAritmetica(n=1,a1=0,r=0){
    let vetorResultado = [];
    let lim = a1 + r*n;
    while(a1<lim){
        vetorResultado.push(a1);
        a1+=r;
    }
    return vetorResultado;
}

function progGeometrica(n=1,a1=0,r=0){
    let vetorResultado = [];
    let cont=0;
    while(cont<n){
        vetorResultado.push(a1);
        a1*=r;
        cont++;
    }
    return vetorResultado;
}

console.log(progAritmetica(5,3,4));
console.log(progAritmetica(10,0,1));
console.log(progGeometrica(5,3,4));
console.log(progGeometrica(6,2,2));
console.log(progGeometrica(10,3,4));