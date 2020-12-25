/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são
diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne
sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições
matemáticas de existência de um triângulo) */

function checaTriangulo(l1,l2,l3){
    if(l1+l2>=l3 && l3+l2>=l1 && l1+l3>=l2){
        if(l1==l2 && l2==l3 && l1==l3){
            console.log('O triângulo é equilátero');
        }
        else if(l1==l2 || l1==l3 || l2==l3)
            console.log('O triângulo é isósceles');
        else
        console.log('O triângulo é escaleno');
    }
    else
        console.log('Não existe um triângulo com tais proporções!');
}
checaTriangulo(3,3,3);
checaTriangulo(3,2,3);
checaTriangulo(3,4,5);
checaTriangulo(3,3,90);