/* Estratégias para a criação de objetos */
{
    // Notação literal:
    const obj1 = {};
    console.log(obj1);

    // Função 'Object':
    const obj2 = new Object;
    console.log(obj2);
    console.log(typeof Object,typeof new Object);

    // Funções construtoras:
    function criaProduto(nome,preco,desconto){
        this.nome = nome;   // *'this' indica que será um atributo público
        this.precoComDesconto = () => {
            return ((1 - desconto/100)*preco).toFixed(2);    // 'preco' e 'desconto' não poderão ser mais alterados pois eles estão encapsulados, têm o escopo apenas dentro da função, não estando disponíveis para fora dela.**
        }
        // **Resumindo: 'produtoX.nome' funciona, mas 'produtoX.preco', não.
    }
    const prod1 = new criaProduto('Caneta',1.5,4);
    const prod2 = new criaProduto('Tênis',230,10)
    console.log(prod1.precoComDesconto(),prod2.precoComDesconto());
    // É como a função 'Object', mas personalizada por ti.

    // Função Factory:
    function criarFuncionario(nome,salarioBase,faltas=0){
        return {
            nome, salarioBase, faltas,
            calculaSalario(){
                return ((salarioBase/30) * (30-faltas)).toFixed(2);
            }
        }
    }
    const f1 = criarFuncionario('André',1700,2);
    const f2 = criarFuncionario('Mathias',2300);
    console.log(f1.calculaSalario(),f2.calculaSalario());

    // 'Object.create()'
    const filha = Object.create(null);
    filha.nome = 'Ana';
    console.log(filha);

    // 'JSON.parse'
    const fromJSON = JSON.parse('{"info": "Sou do JSON"}');  // JSON é um formato textual
    console.log(fromJSON.info);
    
}