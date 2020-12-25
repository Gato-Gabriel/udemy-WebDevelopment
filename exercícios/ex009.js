/* 09)​ Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno será aprovado */

function checaNota(nota){
    let proximoMultiplo;
    if(nota<38)
        return 'Reprovado.';
    for(let i=1;i<5;i++){
        if((nota+i)%5==0){  // Encontra o próximo múltiplo de 5 fazendo testes
            proximoMultiplo = nota+i;
            break;
        }
    }
    if((proximoMultiplo-nota)<3)
        nota = proximoMultiplo;   // Caso a diferença seja menor que 3, arredonda a nota.
    if(nota<40)
        return 'Reprovado';
    return nota;
}

console.log(checaNota(38))
console.log(checaNota(29))
console.log(checaNota(84))
console.log(checaNota(73))