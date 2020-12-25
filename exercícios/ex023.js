/* 23)​ Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média
ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes,3.
Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média
for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código
lido seja negativo. */

function aprovacao(codigo,nota1,nota2,nota3){
    let estado='REPROVADO';
    // Checa qual é a maior nota:
    if(nota1>nota2 && nota1>nota3){
        maior = nota1;
        menor1=nota2;
        menor2=nota3;
    }
    else if(nota2>nota1 && nota2>nota3){
        maior = nota2;
        menor1=nota1;
        menor2=nota3;
    }   
    else{
        maior = nota3;
        menor1=nota1;
        menor2=nota2;
    }
    // Calcula as médias:
    let media = ((maior*4 + menor1*3 + menor2*3)/3).toFixed(2);
    if(media>=5)
        estado = 'APROVADO';
    return `Código ${codigo} - Notas ${maior},${menor1},${menor2} - Média ${media} - ${estado}`
}

console.log(aprovacao(9,2,3,5));
console.log(aprovacao(8,2,3,2));
console.log(aprovacao(10,2,0,0));