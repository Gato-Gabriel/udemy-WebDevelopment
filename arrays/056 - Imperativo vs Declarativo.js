/* Diferenças entre um código Imperativo de um Declarativo */
{
    const alunos = [
        { nome:'João', nota:2.6},
        { nome:'Giovana', nota:9.5}
    ]

    // Abordagem imperativa:
    let total1 = 0;
    for(let i=0;i<alunos.length;i++){
        total1+=alunos[i].nota;
    }
    console.log('Média: ',total1/alunos.length);

    // Abordagem declarativa:
    const getNota = aluno => aluno.nota;
    const soma = (total,nota) => total+nota;
    const total2 = alunos.map(getNota).reduce(soma);
    console.log('Média: ',total2/alunos.length);

    /* Esta última abordagem é interessante por vários fatores. O primeiro deles, é o fato de que, na linha 16, por exemplo, se faz todas as ações de uma vez.
    As funções declaradas podem ser reusadas em outros contextos, evitando assim fazer laços de repetição para toda ocasião parecida.
    O imperativo é como a forma de se ensinar algo passo a passo para alguém, sem faltar detalhes. Ao invés de dizer "arrume a mesa", por exemplo, se diz:"ponha a toalha sobre a mesa, bote os talheres assim, os pratos assim, os ...". Logo, ele não prioriza o que vai ser feito, mas COMO.
    O nosso algoritmo reflete isso: declaramos uma variável zerada, fazemos um laço 'for' que delcara um índice que começa do '0', vai até 'alunos.length', adiciona a cada laço, implementa no total... É muito analógico, bruto.
    A declarativa, pelo contrário, se preocupa em dizer O QUE fazer, não como. Claro, dentro do 'map' e do 'reduce' existem laços 'for', mas passamos apenas critérios para serem feitos, não como serão feitos, os utilizando de uma forma muito mais simples do que a anterior, explícita. */
}