/* Função 'filter()' */
// Filtra um Array. O percorre assim como no 'map', selecionando elementos a partir de um certo parâmetro(ou seja, filtrando).
// Com ele, não preciso fazer um 'forEach' no array e realizar condicionais para então retirar elementos - o 'filter' já faz isso diretamente.
{
    const produtos = [
        { nome:'Notebook', preco: 2499, fragil:true },
        { nome:'iPad Pro', preco: 4199, fragil:true },
        { nome:'Copo de Vidro', preco: 50, fragil:true },
        { nome:'Copo de Plástico', preco:5.99 , fragil:false },
        { nome:'Cofre Revestido', preco: 5000, fragil:false }
    ]
    console.log(produtos.filter(function(p){
        //return false;   // Significa que nenhum elemento retornará.
        //return true;   // Significa que todos os elementos retornarão.
        return p.preco>100;  // Como essa condicional retornará 'true' ou 'false' para cada ocasião, assim serão filtrados os itens.
    }))

    const sofisticados = produtos.filter(p => p.preco>500 && p.fragil);
    console.log(sofisticados);
    // OU:
    const caros = produto => produto.preco>=500
    const frageis = produto => produto.fragil
    console.log( produtos.filter(caros).filter(frageis) );
}

// Criando uma função "'filter()'":
{
    Array.prototype.filter2 = function(callback){
        const newArray = [];
        for(let i=0;i<this.length;i++)
            if(callback(this[i],i,this))   // Se esta callback retornar 'true'
                newArray.push(this[i])  // O elemento é adicionado
        return newArray;
    }
    
    // Refazendo o bloco anterior, com a função 'filter2()':
    const produtos = [
        { nome:'Notebook', preco: 2499, fragil:true },
        { nome:'iPad Pro', preco: 4199, fragil:true },
        { nome:'Copo de Vidro', preco: 50, fragil:true },
        { nome:'Copo de Plástico', preco:5.99 , fragil:false },
        { nome:'Cofre Revestido', preco: 5000, fragil:false }
    ]
    const sofisticados = produtos.filter2(p => p.preco>500 && p.fragil);
    console.log(sofisticados);
}