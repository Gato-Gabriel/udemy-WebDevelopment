/* Par Key-Value */
{
    const nome = 'valor';  // Contexto Léxico 1
    // Esta variável é definida num contexto léxico - local no qual a variável foi definida fisicamente
    // ↑ Isto é um par Key-Value
    function exec(){
        const nome = 'Gato'; // Contexto Léxico 2
        return nome;  // Por serem contextos diferentes, não há conflitos com a outra variável
    }
    // Objetos são grupos aninhados de pares nome-valor
    const cliente = {
        nome: 'Pedro',
        idade: 32,
        endereco: { // Por serem contextos diferentes, posso botar nomes dentro deste objeto, iguais àqueles no qual está contido
            nome: "Rua Avenida Alameda da Silva",
            num: 123
        }
    }
    // Execuções:
    console.log(nome)
    console.log(exec())
    console.log(cliente.nome)
    console.log(cliente.endereco.nome)
}