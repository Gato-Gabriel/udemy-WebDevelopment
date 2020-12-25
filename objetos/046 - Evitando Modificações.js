/* Evitando Modificações em JavaScript */
// Apesar de JavaScript ser uma linguagem extremamente dinâmica e flexível, em certas horas será preferível restringir esta liberdade para se ter dados mais limitados e menos extensíveis e alteráveis, por exemplo.
// Para tal, há certas funções que ajudam a cessar essa flexibilidade nas aplicações
{
    const produto = Object.preventExtensions({  // Não permite extensões no objeto, ou seja, não poderão ser adicionados atributos (porém, ainda podem ser removidos e/ou alterados);
        nome:'Cadeira', preco:50.00
    });
    console.log('Extensível:',Object.isExtensible(produto));   // Testa se o objeto está extensível ou não
    produto.nome = 'Borracha';
    produto.descricao = 'Faz algo.';
    delete produto.preco;
    console.log(produto);

    const pessoa = { nome:'Juliana', idade:43 };
    Object.seal(pessoa);   // "Sela" o objeto, sendo assim, este não pode ter atributos adicionados ou removidos, porém, ainda podem ser alterados os já existentes.
    console.log('Selado:',Object.isSealed(pessoa));  // Checa se o objeto está selado ou não
    pessoa.sobrenome = 'Silva';
    delete pessoa.nome;
    pessoa.idade = 40;
    console.log(pessoa);

    const animal = { nome:'Rex', raca:'Cachorro' };
    Object.freeze(animal);  // É como Object.seal() + valores constantes. O objeto realmente congela, não podendo ter propriedades alteradas, adicionadas ou removidas.
    console.log('Congelado:',Object.isFrozen(animal));  // Checa se o objeto está selado ou não
    animal.nome='Rufus';
    delete animal.raca;
    animal.altura=1.4;
    console.log(animal);
    
}