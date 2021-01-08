/* Função 'reduce()' */
// A função 'reduce' serve para TRANSFORMAR arrays.
// O resultado é sempre passado para a próxima interação, onde tem-se o elemento atual que é o acumulador, e que será passado para a próxima*.
// Tem a ideia de se reduzir os valores os agregando, seja em uma única variável, seja em um array resultante, etc.
// *Para melhor entendimento, ver a documentação: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
{
    const alunos = [
        { nome:'João', nota:2.6, bolsista:false },
        { nome:'Gabriela', nota:7.8, bolsista:true },
        { nome:'Giovana', nota:9.5, bolsista:false },
        { nome:'Paulo', nota:8.3, bolsista:true }
    ]
    console.log(alunos.map(aluno => aluno.nota));  // Array das notas

    const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador,atual){
        console.log(acumulador,atual);   // Primeiro, 'acumulador' será dado como o elem. de índice 0, e o atual, o de índice 1. Esta troca e passagem de valores vai progredindo.
        return acumulador + atual;
    });

    const resultado2 = alunos.map(aluno => aluno.nota).reduce(function(acumulador,atual){
        console.log(acumulador,atual);   // Primeiro, 'acumulador' será dado como o '10' passado, e o atual, o de índice 0.
        return acumulador + atual;
    },10);  // Toma o '10' como valor inicial.
}

// Desafio:
{
    // No seguinte array, faça uma função que cheque se todos os alunos são bolsistas, e também se algum deles é. Utilize 'map' para pegar apenas os dados 'bolsista', e então trabalhe em cima deles.
    const alunos = [
        { nome:'João', nota:2.6, bolsista:false },
        { nome:'Gabriela', nota:7.8, bolsista:true },
        { nome:'Giovana', nota:9.5, bolsista:false },
        { nome:'Paulo', nota:8.3, bolsista:true }
    ]
    
    const bolsistas = alunos.map(aluno => aluno.bolsista);
    const saoBolsistas = bolsistas.reduce((ehBolsista,bolsista) => ehBolsista+(bolsista ? 1:0),0);
                                                                         // ↑ O valor retornado será somado. Ao fim, se o número for maior que 0, significa que houve algum aluno bolsista.
    console.log(saoBolsistas<alunos.length?'Nem todos os alunos são bolsistas.':'Todos são bolsistas!');   // Checa se todos são bolsistas
    console.log(saoBolsistas>0?'Há alunos bolsistas!':'Todos os alunos não são bolsistas.');   // Checa se exite no mínimo um aluno bolsista

    // Utilizando apenas booleanos:
    const todosBolsistas = (resultado,bolsista) => resultado && bolsista;
    console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas));

    const algumBolsista = (resultado,bolsista) => resultado || bolsista;
    console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista));
}

// Criando uma função "'reduce()'":
{
    Array.prototype.reduce2 = function(callback,valorInicial){
        let indiceInicial = valorInicial ? 0:1;
        let acumulador = valorInicial || this[0];
        for(let i=indiceInicial;i<this.length;i++)   // A partir do índice '1', pois o acumulador será o de '0'
            acumulador = callback(acumulador,this[i],i,this)
        return acumulador;
    }
    
    // Refazendo o bloco anterior, com a função 'filter2()':
    const soma = (total,valor) => total + valor;
    const nums = [1,2,3,4,5,6];
    console.log(nums.reduce(soma,21));
}