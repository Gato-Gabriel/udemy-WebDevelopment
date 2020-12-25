/* Herança em JavaScript #02 */
{
    // Object.create()
    const pai = { nome:'Pedro', corDoCabelo:'Preto'};

    const filha1 = Object.create(pai);  // Cria um objeto novo tendo como protótipo o objeto 'pai';
    // ↑ Neste caso, não apontará para 'Object.prototype', e sim para 'pai'.
    console.log(filha1);   // O objeto está vazio, apenas tem como protótipo o 'pai'.
    filha1.nome = 'Ana';
    console.log(filha1);   // A propriedade é adicionada
    console.log(filha1.corDoCabelo);  // Prototipagem

    const filha2 = Object.create(pai,{  // Esse segundo parâmetro é um objeto no qual boto todos os atributos a serem adicionados no objeto criado ('filha2').
        nome:{value:'Bia',writable:false,enumerable:true}
    })
    filha2.nome='Carla';
    console.log(`${filha2.nome} tem cabelo ${filha2.corDoCabelo}`);
    console.log(Object.keys(filha1));  // Mostra apenas as chaves daquele objeto, não de seus protótipos
    console.log(Object.keys(filha2));

    // For-In e o efeito da herança percorrendo atributos:
    for(let key in filha2){
        filha2.hasOwnProperty(key)? console.log(key) : console.log(`Por herança: ${key}`);
        //      ↑ Esta propriedade retorna true/false verificando se o objeto tem determinado atributo por herança, ou dele mesmo.
    }
}

/* Funções e protótipos */
{
    function MeuObjeto(){}
    console.log(MeuObjeto.prototype);
    const obj1 = new MeuObjeto
    const obj2 = new MeuObjeto
    console.log(obj1.__proto__ === obj2.__proto__);   // Ambos os objetos da função construtora apontam para o mesmo protótipo
    console.log(MeuObjeto.prototype === obj1.__proto__);   // Todo objeto instanciado a partir de uma função contrutora apontará para '(FunçãoConstrutora).prototype', e não 'Object.prototype'

    MeuObjeto.prototype.nome = 'Anônimo';
    MeuObjeto.prototype.falar = function(){
        console.log(`Bom dia! Meu nome é ${this.nome}!`)
    }
    obj1.falar();
    obj2.nome = 'Alessandro';
    obj2.falar();

    const obj3 = {};  // Cria um objeto
    obj3.__proto__ = MeuObjeto.prototype;  // Bota 'MeuObjeto' como seu protótipo
    obj3.nome = 'Objeto Novo';
    obj3.falar();

    // Resumo:
    console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);   // true - 'MeuObjeto' é o protótipo do objeto instanciado a partir dele
    console.log(MeuObjeto.__proto__ === Function.prototype);   // A função também aponta para um protótipo interno (no caso, o 'Function.prototype');
    console.log(Function.prototype.__proto__ === Object.prototype);  // Protótipos de função também apontam para protótipos de objeto...
    console.log(Object.prototype.__proto__);   // null - Este é o protótipo máximo, não aponta para nenhum protótipo
}
