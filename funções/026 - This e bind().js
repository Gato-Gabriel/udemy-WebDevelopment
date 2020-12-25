/* Palavra reservada 'This' */
// *Em algumas linguagens, chamada de 'Self'
// O 'This' é uma forma de referenciar o objeto atual da execução;

{
    // 'This' é sempre o objeto que está sendo referenciado naquele contexto de execução, é o dono da função executada naquele contexto
    // Caso fosse no Browser, o 'this' no contexto global seria 'window'.
    // Quando se tem uma função tradicional, o 'this' pode variar de acordo com o modo que a função é chamada/acessada;
    // Porém, ao se utilizar uma Arrow function, o 'this' não varia, sendo definido no momento e contexto (léxico) em que a função é definida;
    // *Mais sobre o assunto no arquivo "Funções Arrow.js".
    console.log(this===global);
}

// Função 'bind':
{
    const pessoa = {
        saudacao: 'Olá',
        falar(){
            console.log(this.saudacao)  // Ele está acessando a 'saudacao' do objeto deste contexto
            // Caso eu retire o 'this', ele não entenderá o que é 'saudacao', pois não conhece neste contexto.
        }
    }
    pessoa.falar();

    const dizer = pessoa.falar;
    dizer();  // Neste caso, 'dizer' não tem um atributo 'saudacao'. É como se estivesse chamando a função dentro de outro contexto;

    const falarDePessoa = pessoa.falar.bind(pessoa)   // Com o 'bind', passa-se um objeto, no qual queira ser resolvido o 'this'.
    falarDePessoa();  // Logo, ele torna a apontar para o objeto correto.
    // Agora, a função 'falarDePessoa' agora chamará de acordo com o objeto pessoa, independente da execução.
    // Portanto, o 'bind' "amarra" determinado objeto para que ele seja o dono da execução, smepre que o método for chamado.
}
{
    function Pessoa(){
        this.idade = 0; // No momento em que eu criar um objeto a partir desta função (instanciar), terei o atributo 'idade' à disposição para manipulação
        function teste(){  // Esta função dispara uma outra a partir de determinado intervalo passado. Neste caso, passaremos uma função como parâmetro.
            this.idade++
            console.log(this.idade)
        }
        setInterval(teste.bind(this),1000)  // Esta função dispara uma outra a partir de determinado intervalo passado. Neste caso, passaremos uma função como parâmetro.
                                        // Intervalo em milisegundos
        // Neste caso, o 'this' não aponta para o objeto 'Pessoa', pois quem dispara a chamada desta função é um temporizador, não o próprio objeto 'Pessoa'.
        // Para resolver o descrito acima, é necessário o ".bind(this)".
    }
    new Pessoa;

    //const este = this   // Armazenando em uma constante, o 'this' nunca mudará, sempre se referindo ao contexto no qual foi criado.
}