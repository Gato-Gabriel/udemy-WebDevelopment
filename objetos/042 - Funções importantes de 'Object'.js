/* Funções importantes dentro da função 'Object' */
{
    const pessoa = {
        nome:'Tatiana',
        idade:24,
        peso:67
    }
    console.log(Object.keys(pessoa));  // Pega as "chaves"(do par chave-valor) do objeto
    console.log(Object.values(pessoa)); // Pega os "valores"(do par chave-valor) do objeto
    console.log(Object.entries(pessoa)); // Pega os pares "chave-valor" do objeto
    Object.entries(pessoa).forEach(element => {  // Idem ao acima, porém com for-each.
        console.log(`${element[0]}: ${element[1]}`)
    });

    pessoa.sobrenome = 'Da Silva';  // Definindo uma propriedade dinâmicamente.
    Object.defineProperty(pessoa,'dataNascimento',{  // Idem à linha acima, porém agora, pode-se definir propriedades sobre o atributo dado.
        // Pode-se definir se ela pode ser alterada, se ficará visível para outras funções, etc.
        enumerable: true,  // Diz se a função será listada(Ex: Object.keys, etc.);
        writable:false,   // Diz se a propriedade pode ou não ser modificada;
        value: '03/03/1978'
    });
    pessoa.dataNascimento = '03/03/1987';

    const destino = { a:1 };
    const obj1 = { b:2 };
    const obj2 = { c:3, a:4 };
    const objResultante = Object.assign(destino,obj1,obj2,{d:6});  // Assigna e concatena valores de diferentes objetos a um único, sobrescrevendo atributos já existentes
    console.log(objResultante);

    Object.freeze(objResultante);  // "Congela" o objeto, não podendo ser adicionadas/removidas/alteradas variáveis e atributos.
    objResultante.c = 1234;
    console.log(objResultante);
}