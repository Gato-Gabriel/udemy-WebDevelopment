/* Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa
aplicação, é possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma
funcionalidade que você está desenvolvendo no momento é a de somar o total das despesas.
Crie uma função que receba um array de produtos e retorne o total das despesas.
Exemplos:
    despesasTotais([
     {nome: "Jornal online", categoria: "Informação", preco: 89.99},
     {nome: "Cinema", categoria: "Entretenimento", preco: 150}
    ]) // retornará 239.99
    despesasTotais([
     {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
     {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) // retornará 34599.89 */

function calculaDespesas(array=[{}]){
    let despTotal=0;
    array.forEach(obj => despTotal+=obj.preco)
    return despTotal;
}

console.log(calculaDespesas([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]));
console.log(calculaDespesas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]));

// Desafio extra: Repita o exercício, mas só some as despesas do objeto se seu atributo 'catalogado' estiver como 'true'.

function calculaDespesasCatalogadas(array=[{}]){
    let despTotal=0;
    array.forEach(obj => obj.catalogado? despTotal+=obj.preco : 0);
    return despTotal;
}

console.log(calculaDespesasCatalogadas([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99, catalogado:true},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150, catalogado:false}
]));
console.log(calculaDespesasCatalogadas([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99, catalogado:false},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90, catalogado:false}
]));