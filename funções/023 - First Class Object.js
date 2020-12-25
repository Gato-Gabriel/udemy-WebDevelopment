/* Funções em JS */
// "Se JavaScript fosse um país, seu presidente seria função."
// É como se fosse um cidadão de primeira linha; pode-se passar função como parâmetro, retornar uma função a partir de outra, delcarar uma função dentro de outra, armazenar em uma variável.. e assim vai.
// ↑ Isso abre um leque de possibilidades na linguagem, pode-se fazer tudo a partir delas.
// No JavaScript, funções são tratadas como objetos de primeira classe(First Class Objects). É como um dado, podendo ser passada como parâmetro/retorno.
{
    // Criando de forma literal:
    function func1(){  // Em funções normais, não se pode omitir seus blocos, denotados por chaves. Apenas em arrow-functions.
        
        // O retorno de valor é facultativo. Caso você não ponha, ele retornará 'undefined'.
    }

    // Armazenando em uma variável:
    const func2 = function () {  // Para invocar suas funcionalidades, é necessário chamar com '()' .
    }

    // Armazenando em um Array:
    const arrayTeste = [function (a,b) { return a+b; },func1,func2]   // Função no JS é como qualquer outro dado, ainda mais nos quesitos de passagem de parâmetro/atribuição de valor.
    console.log(arrayTeste[0](4,3));

    // Armazenando como atributo de um objeto:
    const obj = {}
    obj.falar = function(){ return 'Opa'};
    console.log(obj.falar());  // Não se esqueça dos '()' .

    // Passando função como parâmetro a outra:
    function executar(func3){
        func3;  // Neste caso, não dá erro - sabe que a função existe -, apenas não a executa.
        func3();
    }
    executar(function(){ console.log('Funciona!')} );  // Posso chamar uma já pronta OU criá-la dentro como argumento;

    // Função retornando/contendo outra função:
    function soma(a,b){
        return function(c){
            console.log(a+b+c);
        }
    }
    soma(2,3)(4);  // Ele chama a função, e em seguida, a outra dentro dele.
    
    const somaCom = soma(2,3);
    somaCom(5);
}