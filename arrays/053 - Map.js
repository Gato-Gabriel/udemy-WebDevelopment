/* Função 'map()' */
// Serve para fazer uma transformação no array, o mapeando para um outro Array com os dados transformados.
// Com ele, não preciso fazer um 'forEach' no array e então realizar as transformações - o 'map' já faz isso diretamente.
{
    const nums = [1,2,3,4,5];
    let dobroNums = nums.map(function(elemento){
        return elemento*2;
    })
    console.log(dobroNums);
    // OU
    dobroNums = nums.map(num => num*2);
    console.log(dobroNums)

    // Nota: 'map()' não transforma o array atual, mas gera um novo.
    const somaDez = e => e+10;
    const triplo = e => e*3;
    const paraDinheiro = num => (`R$ ${parseFloat(num).toFixed(2).replace('.',',')}`);
    resultado = nums.map(somaDez).map(triplo).map(paraDinheiro);   // Como o 'map()' retorna um Array, pode-se chamá-lo sucessivamente.
    console.log(resultado);
}

// Desafio: No array com itens no formato JSON a seguir, retorne apenas os atributos 'preco' deles.
{
    const carrinho = [
        '{ "nome": "Borracha", "preco":2 }',
        '{ "nome": "Caderno", "preco":14.90 }',
        '{ "nome": "Kit de Lapis", "preco":41.50 }',
        '{ "nome": "Caneta", "preco":1.50 }'
    ]
    // Resolução:
    const carrinhoPrecos = carrinho.map(function(objeto){
        return JSON.parse(objeto).preco;
    })
    console.log(carrinhoPrecos);

    // OU (fazendo funções separadas):
    const paraObjeto = json => JSON.parse(json);
    const carrinhoPrecos2 = obj => obj.preco;
    const resultado = carrinho.map(paraObjeto).map(carrinhoPrecos2);
    console.log(resultado);
}

// Criando uma função "'map()'":
{
    Array.prototype.map2 = function(callback){
        const newArray = [];   // O 'map' retorna um novo array, não mexendo no original
        for(let i=0;i<this.length;i++){
            newArray.push(callback(this[i],i,this));    // Adiciono um elemento a partir da chamada da callback
        }
        return newArray;
    }

    // Refazendo o bloco anterior, com a função 'map2()'
    const carrinho = [
        '{ "nome": "Borracha", "preco":2 }',
        '{ "nome": "Caderno", "preco":14.90 }',
        '{ "nome": "Kit de Lapis", "preco":41.50 }',
        '{ "nome": "Caneta", "preco":1.50 }'
    ]
    const paraObjeto = json => JSON.parse(json);
    const carrinhoPrecos2 = obj => obj.preco;
    const resultado = carrinho.map2(paraObjeto).map2(carrinhoPrecos2);
    console.log(resultado);
}