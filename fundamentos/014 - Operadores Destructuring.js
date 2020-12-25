/* Operadores Destructing */
// Introduzido na versão 2015 do JS - Operador de Desestruturação
// Resumidamente: ele tira da estrutura(objeto,array,etc.) algo, algum elemento/atributo.
// Em Objetos:
{
    // Usa-se '{}'(chaves);
    const pessoa = {
        nome:'Ronaldo',
        idade:26,
        endereco:{
            logradouro:'Rua Avenida Alameda da Silva',
            numero:456
        }
    }
    const {nome,idade} = pessoa;  // Isto significa: tire do objeto 'pessoa' os atributos 'nome' e 'idade'
    console.log(nome,idade);  // Portanto, desta maneira não é necessário acessar estar variáveis através do objeto.
    // Resumindo: Agora não precisa botar "pessoa.nome", só "nome".
    //console.log(pessoa.nome);  // Todavia, ainda consigo acessá-las desse jeito
    const {endereco:{logradouro,numero,cep=null}} = pessoa; // Acessando atributos de objetos dentro de objetos
    console.log(logradouro,numero,cep);
    //const {agencia:{conta, banco}} = pessoa;
    //console.log(conta,banco); // Porém, caso aquela estrutura aninhada não exista, dará erro

    const {nome:n, idade:i} = pessoa;  // Isto é para caso eu queira renomear estas variáveis
    console.log(n,i);

    const {sobrenome, casada=true} = pessoa;  // Supondo que eu tente desestruturar atributos não existentes, eles voltam undefined.
    // Porém, no caso de 'casada', retorno "true" caso não exista, para que volte um valor padrão
    console.log(sobrenome,casada);
}

// Em Arrays:
{
    // Usa-se '[]'(colchetes);
    const [a]=[10];
    console.log(a);
    const [n1, ,n3, ,n5,n6=0] = [10,9,8,7];
    console.log(n1,n3,n5,n6);

    const [ ,[ ,nota]] = [[ ,8,8],[9,6,8]];
    console.log(nota); // O exemplo é imprático; foi apenas um para se entender a lógica da desestruturação em Arrays.

    const vetor_exemplo = [0,1,2,3,4,5,6,7,8,9];
    const [, , ,elemento] = vetor_exemplo;
    console.log(elemento);
}

// Diferenças para Objetos e Arrays:
{
    function rand({min=0, max=100}){
        const valor = Math.random() * (max-min) + min;
        return Math.floor(valor);
    }
    const obj_teste = {min:40, max:50};
    console.log(rand(obj_teste));
    console.log(rand({min:900}));
    console.log(rand({}));
    //console.log(rand());  // Aqui, caso eu tente não passar um objeto como argumento, dará erro, pois ele tentará desestruturar algo "nulo" ou "undefined";

}
{
    function aleat([min=0, max=100]){
        if(min>max){
            [min,max] = [max,min]
        }
        const result = Math.random() * (max-min) + min;
        return Math.floor(result);
    }
    console.log(rand([50,40]));
    console.log(rand([992]));
    console.log(rand([,10]));
    console.log(rand([]));
    console.log(rand());  // Aqui dará erro assim como com objetos, pois estaremos tentando desestruturar elementos de algo nulo/undefined.

}