/* Notação Ponto */
// Acessa-se membros de uma função/objeto/... a partir da notação ponto
{
    console.log(typeof console);   // Percebe-se que 'log' é um membro do objeto 'console'
    console.log(Math.ceil(6.1));   // 'ceil' também é um método, dentro do objeto 'Math'
    const obj1 = {};  // Cria-se o objeto
    obj1.nome='Ronaldo';  // Cria-se um atributo a ele, através da notação ponto
    //obj1['nome']='Isaías';  // Idem ao acima, porém sem a notação ponto
    function Obj(nome){
        this.nome = nome; // O nome(atributo) associado ao objeto criado a partir dessa função será como o 'nome' passado por parâmetro
        // Portanto, utilizando 'this', recebemos o atributo 'nome' por parâmetro, e o atribuimos aos objetos instanciados a partir da FUNÇÃO 'Obj', sendo assim, o deixamos público.
        this.executa = function(){
            console.log('Executa!!!');
        }
    }
    const obj2 = new Obj('Ezequiel');
    const obj3 = new Obj('Abraão');
    console.log(obj1.nome,obj2.nome,obj3.nome);
    obj3.executa();

}