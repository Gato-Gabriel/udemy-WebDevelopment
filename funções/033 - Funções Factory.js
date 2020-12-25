/* Funções Factory */
// Conceito: São funções "fábrica", sendo assim, retornam um objeto.
{
    // Factory simples:
    function criarPessoa(){
        return {
            nome:'Ana',
            idade:15
        }  // Podem ser valores fixos, ou passados por parâmetros
    }
    console.log(criarPessoa());  // Deste modo, ele cria uma nova instância para ser trabalhada independentemente;

    // Minha factory:
    function criarProduto(nome,preco,desconto=0){
        return {
            nome,
            preco,
            desconto    // OU desconto: 0 (seto o valor padrão)
        }
    }
    console.log(criarProduto('Mesa',689));
    console.log(criarProduto('Notebook',2199));
}

// Factory vs Classe:
{
    // Lembrando que Classe nada mais é que uma forma diferente de se construir função em JavaScript
    class Pessoa{
        constructor(nome){
            this.nome = nome
        }
        falar(){
            console.log("Meu nome é",this.nome)
        }
    }
    const pessoa1 = new Pessoa('João');
    pessoa1.falar();

    const criaPessoa = (nome) => {
        return {
            falar: () => console.log("Meu nome é",nome)
        }
    }
    const pessoa2 = criaPessoa('Alberto');
    pessoa2.falar();

    // A diferença é que o objeto da função construtora tem ciência do contexto léxico no qual foi declarado, não precisando do 'this' para ter suas propriedades acessadas;
}
