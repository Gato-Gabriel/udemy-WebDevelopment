/* Tipos no JavaScript */
/* 4 - Arrays */
{
    // Arrays/Vetores são estruturas unidirecionais, lineares
    // Os Arrays do JavaScript são heterogêneos - pode-se ter strings, numeros, booleanos, etc. dentro de um mesmo vetor, já que é fracamente tipada;
    // E também são flexíveis - não há tamanho fixo, pode-se tirar e acrescentar tamanho e elementos.
    const vetor_teste = [7.7, 8.9 , 9.7, 6.8];
    console.log(vetor_teste);
    console.log(vetor_teste[0],vetor_teste[3]);
    console.log(vetor_teste[4])
    vetor_teste[4] = 10;
    console.log(vetor_teste[4]);
    vetor_teste[9] = 11.2;
    console.log(vetor_teste);
    console.log(vetor_teste.length);

    const vetor_vazio=[];
    console.log(vetor_vazio.length)
    vetor_vazio.push(57,{id:3},false,null,'frase');
    console.log(vetor_vazio);
    vetor_vazio.pop();    // Retira o último elemento do vetor
    console.log(vetor_vazio);
    delete vetor_vazio[3];   // Retira o elemento em um certo índice
    console.log(vetor_vazio);
}

/* 5 - Objetos */
{
    // Os objetos, no JS, são como uma coleção de key-value(chave-valor).
    // Têm-se o nome do atributo(identificador), e então um valor que é passado a ele.
    const obj1 = {}    // Assim como os colchetes [] definem Arrays, as chaves {} definem objetos.
    obj1.nome = "JavaScript";   // Pode-se definir os atributos de um objeto dinâmicamente, após ela criada.
    obj1.idade = 24;
    obj1["Tipagem"] = "fraca";
    console.log(obj1);

    const obj2 = {     // Definindo atributos estaticamente, de modo literal
        nome: "Java",
        idade: 25,
        Tipagem: "forte",
        obj_aninhado: {    // Objetos em JS podem ter outros objetos aninhados
            exemplo_1: 12,
            exemplo_2: "item aninhado"
        }
        // Pode-se ter também funções e métodos, arrays... relacionadas àquele objeto.
    }
    // Tipagem
    console.log(typeof Object);
    console.log(typeof new Object);

    const Cliente = function() {}
    console.log(typeof Cliente)
    console.log(typeof new Cliente)

    class Produto {};
    console.log(typeof Produto);   // Classe na verdade é uma função, apenas com atalhos de sintaxe.
}