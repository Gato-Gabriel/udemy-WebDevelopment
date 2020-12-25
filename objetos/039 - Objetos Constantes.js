/* Objetos declarados como constantes */
// Mesmo ao se declarar objetos como constantes, ainda pode-se alterar/adicionar/remover atributos. Por que isso acontece?
{
    const pessoa = { nome:'João'};  // Toda variável/constante declarada tem um endereço de memória.
    // pessoa -> f08ae9(endereço) -> {nome:'João'}   // Neste endereço, ficam guardadas suas informações.
    pessoa.nome='Pedro';   // Ao se fazer isso, não se muda a referência da constante 'pessoa'(continua apontando para f08ae9), mas o dado,objeto que está neste endereço pode ser alterado.
    console.log(pessoa);

    // pessoa = {nome:'Ana'};  // Neste caso, estou tentando dar a 'pessoa' um novo objeto, armazenado em outro local;
    // pessoa <- f073a0 -> {nome:'Ana'}
    // Como 'pessoa' é uma constante, sempre apontará para 'f08ae9', não podendo mudar isto.

    Object.freeze(pessoa);  // Este método "congela" o objeto, não podendo ter suas propriedades alteradas/adicionadas/removidas.
    pessoa.nome='Maria';   // Isto não dará erro, apenas não terá efeito, será ignorado.
    pessoa.sobrenome='Johnson';  // Idem ao acima
    delete pessoa.nome;  // Idem ao acima
    console.log(pessoa);

    const pessoaConstante = Object.freeze({nome:'Arnaldo'});  // Neste caso, já crio um objeto que não pode ser alterado.
    pessoaConstante.nome='Ronaldo';
    console.log(pessoaConstante)
}
// *Endereços simbolicamente representados!
// **Após congelado, um objeto não pode ser descongelado. Porém, é possível se criar uma cópia do objeto, para então alterá-lo.