/* Método 'FlashMap()' */
// Variação, associando 'map' com 'concat' - Não existe nativamente na linguagem, mas é útil em certas situações.
{
    const escola = [{
        turma:'71A',
        alunos: [
        { nome:'Gustavo', nota:8.1 },
        { nome:'Amanda', nota:9.3 }
        ]
    },{
        turma:'71B',
        alunos: [
        { nome:'Matheus', nota:7.3 },
        { nome:'Sara', nota:8.2 }
        ]
    }]
    
    // Objetivo: extrair todas as notas e concatená-las em um array
    const getNotaDoAluno = al => al.nota;
    const getNotasDaTurma = trm => trm.alunos.map(getNotaDoAluno);
    const notas1 = escola.map(getNotasDaTurma);
    console.log(notas1);
    // OU:
    const todasNotas = [].concat(escola.map(salas => salas.alunos.map(aluno => aluno.nota)));
    console.log(todasNotas);

    // Agora a questão: para que querer usar 'flatmap'? R: Ao invés de ter-se um array de arrays, tem-se um único array com os dados, "achatando"(flattening) o maior.
    // console.log([].concat([ 8.1, 9.3 ], [ 7.3, 8.2 ]));  <- Este é o resultado que queremos.

    // Criação:
    Array.prototype.flatmap = function(callback){
        return Array.prototype.concat.apply([],this.map(callback));  // Aplico um 'map' com a função normalmente, mas botando tudo em um array vazio.
    }

    const notas2 = escola.flatmap(getNotasDaTurma);
    console.log(notas2);
}