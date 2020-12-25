/* Revisão sobre objetos */
{
    // Objeto: É uma coleção dinâmica de pares chave-valor.
    const produto = new Object
    produto.nome = 'Cadeira'
    produto['data de validade']=null;
    produto.preco=50;
    console.log(produto);

    delete produto.preco;  // Exclui um atributo do objeto
    delete produto['data de validade'];
    console.log(produto);

    const carro = {
        modelo: 'A4',
        valor: 49000,
        proprietario: {
            nome: 'Raul',
            idade: 56,
            endereco: {
                logradouro: 'Rua Avenida Alameda da Silva',
                numero: 123
            }
        },
        condutores:[{nome: 'Junior', idade:19},{nome:'Arnaldo',idade:26}];
        calculaValorSeguro: function(){
            // ...
        }
    }
    carro.proprietario.endereco.numero = 456;
    carro['proprietario']['endereco']['logradouro']='Rua que Sobe e Desce'; //Este modo é legal para se fazer uma instrospecção no objeto, caso eu não conheça, não saiba o nome do atributo.

    delete carro.condutores;  // Tudo que houver dentro desta propriedade também será deletado
    delete carro.proprietario.endereco;
    delete carro.calculaValorSeguro;
    console.log(carro);
    console.log(carro.condutores);  // Como o objeto 'carro' existe, posso acessar tudo dentro dele, até coisas que não existem - neste caso, não dará erro pois a propriedade apenas não foi definida.
    //console.log(carro.condutores.length);  // O problema é tentar acessar alguma propriedade de algo indefinido.
    // Portanto, deve-se sempre verificar se certa variável está definida ou não para então acessá-la.
}
