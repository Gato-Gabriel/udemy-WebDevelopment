/* Contexto Léxico */
// Nada mais é que o contexto,local, onde as coisas são declaradas
const valor = 'Global';
{
    function minhaFuncao(){
        console.log(valor)  // Como dentro desta função não há uma variável com este nome, ele procurará no escopo maior, e imprimirá normalmente.
    }
    function exec(){
        const valor = 'Local';
        minhaFuncao();
        // Graças ao contexto léxico em que a função foi escrita, 'minhaFuncao' achará o 'valor' "Global"
        // Isto ocorre pois, ao ser declarada no JS, uma função tem dentre seus conteúdos(nome, parâmetros) a consciência do local onde foi escrita, ou seja, seu contexto léxico.
        // Mesmo que ela seja chamada em outro local, esteja sendo passada como parâmetro, ela carrega consigo o local onde foi escrita, não o de execução.
        // Portanto, a função carrega consigo seu local de definição, procurando todas as variáveis/funções dentro do escopo léxico onde foi definida, e então, passando a um mais abrangente.

    }
    exec();
}

/* Closure */
// Conceito: Closure é o escopo criado quando uma função é declarada,definida. Vem de fechamento, envolver algo;
// Este escopo permite acessar e manipular variáveis declaradas externas à função;
const x ='Global';
{
    function fora(){
        const x ='Local';
        function dentro(){  // O contexto léxico desta, é dentro da função 'fora'
            return x;
        }
        return dentro;
    }
    const minhaFunc = fora();
    console.log(minhaFunc());  // Graças ao Closure da função, ela chamará o 'x' "Local" ao invés do "Global".
}