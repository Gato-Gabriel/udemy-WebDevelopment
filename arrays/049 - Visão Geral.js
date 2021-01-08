/* Visão geral sobre Arrays em JS */
// Arrays em JavaScript são na verdade objetos especiais, com características e atributos próprios - Logo, não existe o TIPO Array em JS
{
    console.log(typeof Array, typeof new Array, typeof []);
    // Em JavaScript um array é dinâmico, podendo ter seu tamanho alterado, itens adicionados e removidos...
    // Por ser uma linguagem fracamente tipada, JS permite diversos tipos de dados dentro de um mesmo Array, sendo uma estrutura heterogênea
    // ↑ Todavia, a boa prática se volta a trabalhar com dados homogêneos dentro de um array, para uma mais fácil manipulação.
    
    let aprovados = new Array('Bia','Carlos','Ana');
    console.log(aprovados);
    aprovados = ['Bia','Carlos','Ana'];
    console.log(aprovados[0],aprovados[1]);  // Array é uma estrutura indexada - se acessam suas posições a partir de índices
    console.log(aprovados[3]);   // Neste caso, como o elemento não existe, é dado como 'undefined'
    aprovados[3]='Douglas';   // Forma válida de se adicionar um item a um array
    console.log(aprovados[3]);
    aprovados.push('Ednaldo');   // Forma usual de se adicionar um elemento à última posição do array
    console.log(aprovados.length);
    aprovados[7]='Reinaldo';
    console.log(aprovados);  // Todos os elementos entre o último e o mais recente estarão vazios, com o valor 'undefined'

    aprovados.sort();   // Ordena o array em ordem crescente e alfabética. Este comando altera diretamente o Array, não retornando um novo, mas o mesmo objeto.
    console.log(aprovados);
    delete aprovados[1];   // Deleta o elemento daquele índice, o deixando vazio, com valor 'undefined'.

    aprovados = ['Bia','Carlos','Ana'];
    aprovados.splice(1,2);   // Pode adicionar, remover, ou adicionar e remover índices do Array.
    // ↑ O primeiro número diz o índice onde se deseja trabalhar. O segundo, diz em relação a quantos elementos serão excluídos a partir daquele índice.
    // Os outros itens dizem a respeito dos elementos a serem adicionados.
    console.log(aprovados);
    
    aprovados = ['Bia','Carlos','Ana'];
    aprovados.splice(1,0,'Douglas','Ednaldo');
    console.log(aprovados);

}