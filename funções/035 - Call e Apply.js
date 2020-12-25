/* Call e Apply */
// Há várias formas de se chamar uma função, seja diretamente pelo escopo global, a partir de um objeto, etc., e Call e Apply são destas.
// Uma função dentro de JavaScript é um tipo, e por isso, tem outras funções dentro dele(como o 'bind'), e Call e Apply são destas.
{
    function pegaPreco(imposto=0,moeda='R$'){   // A diferença entre o Call e o Apply é justamente a forma de se passar os parâmetros em sua invocação;
        return `${moeda} ${(this.preco * (1 - this.desconto/100) * (1+imposto/100)).toFixed(2)}`
    }

    const produto1  = {
        nome: 'Notebook',
        preco:2399,
        desconto: 15,
        pegaPreco   // Como já existe um método deste nome, aquele criado dentro do objeto será associado ao exterior, já existente;
    }   
    global.preco = 20;
    global.desconto = 10;
    console.log(pegaPreco());
    console.log(produto1.pegaPreco())

    const carro = {
        preco: 40999,
        desconto: 15
    }
    console.log(pegaPreco.call(carro))  //Passo o objeto como o contexto no qual a função será executada
    console.log(pegaPreco.apply(carro));
    // A diferença entre estas duas funções é a passagem de parâmetros;
    // No caso do 'call', passo diretamente em seus parâmetros, cada um dos que serão passados para a função. O primeiro é o contexto(que pode estar nulo, ser o global, o de um objeto, etc.), e então, aqueles a serem passados à própria função.
    console.log(pegaPreco.call(carro,17,'US$'))
    // No caso do Apply, ao invés de se colocar todos os parâmetros diretamente, os passarei dentro de um Array. O primeiro é o contexto de execução, e então o Array, com todos os parâmetros a serem usados na função, dentro dele.
    console.log(pegaPreco.call(global,[17,'US$'])) // -> Caso eu tente tirar os colchetes, resultará em erro.
}