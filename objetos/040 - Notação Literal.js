/* Melhorias na notação literal de objetos */
{
    const a = 1;
    const b = 2;
    const c = 3;
    const obj1 = {a:a,b:b,c:c};  // Versão antiga(ES5) para se criar objetos
    const obj2 = {a,b,c};   // Automaticamente assume o nome da constante com o do atributo criado.
    console.log(obj1,obj2);

    // Melhoria ao se criar dinamicamente um objeto:
    const nomeAtrib='nota';
    const valorAtrib=7.84;
    const obj3={};
    obj3[nomeAtrib] = valorAtrib;
    console.log(obj3);

    const obj4 ={[nomeAtrib]:valorAtrib};
    console.log(obj4);

    // Melhoria quanto à definição de funções dentro de um objeto literal
    const obj5 = {   // Forma antiga: Padrão chave-valor
        funcao1: function() {
            // ...
        },
        funcao2() {
            // ...
        }
    }
    console.log(obj5);
}