/* Funções Arrow(com seta) */
// - Úteis para se ter a sintaxe reduzida e objetiva
// Declaração e sintaxe:
{
    let dobro = function(num){
        return num * 2;
    }
    dobro = (num) => {
        return 2*num;
    }
    dobro = num => num*2;  // Return implícito

    console.log(dobro(3));

    let ola = function(){
        return 'Olá';
    }
    ola = () => 'Olá'   // OU ↓
    ola = _ => 'Olá'  // Como a função não tem parâmetros(e não usa), pode-se passar qualquer coisa no lugar.

    console.log(ola());
}
// Comando 'this':
/* {
    // O 'this' dentro de funções arrow é fixo, baseado no contexto de declaração, não importando o local onde é chamado
    function Pessoa(){
        this.contador=0;
        setInterval( () => {
            this.contador++   // Como o contexto léxico é o desta função, quando for chamada, o 'this' sempre apontará à mesma.
            console.log(this.contador)
        },1000)
    }
    new Pessoa;
} */
// Comparando o funcionamento:
{
    let comparaComThis = function(param){
        return this===param;
    }
    console.log("Comparando 'this' com o global: "+comparaComThis(global));  // Para melhor didática, tentar o mesmo no console do navegador, porém passando "global" como argumento;
    console.log("Comparando 'this' com 'this': "+comparaComThis(this));  // O 'this' varia

    const obj = {};
    comparaComThis = comparaComThis.bind(obj);  // A partir de agora, sempre que esta função for chamada, o 'this' apontará para 'obj', e não mais para o escopo global.
    console.log("Comparando 'this' com o global após bindar no objeto: "+comparaComThis(global));
    console.log("Comparando 'this' com o objeto após bindar: "+comparaComThis(obj));  // Agora, aponta para este.

    let comparaComThisArrow = (param) => (this===param)
    console.log("Comparando 'this' com o global em arrow function: "+comparaComThisArrow(global));  // Isto dá falso pois a função foi definida dentro de um módulo do Node(cada arquivo representa um módulo). 
    console.log("Comparando 'this' com o módulo em arrow function: "+comparaComThisArrow(module.exports)); // Portanto, o "dono"(this) da função é o próprio módulo.
    console.log("Comparando 'this' com o 'this' em arrow function: "+comparaComThisArrow(this)); // Aqui, o 'this' realmente é o 'this'

    // Porém, é possível usar 'bind' em uma função arrow?
    comparaComThisArrow = comparaComThisArrow.bind(obj);
    console.log("Comparando 'this' com o objeto(após bindar) em arrow function: "+comparaComThisArrow(obj));  // Neste caso, a Arrow function é "mais forte", permanecendo intacta, não mudando o 'this' do qual foi escrito.
    console.log("Comparando 'this' com o módulo(após bindar no objeto) em arrow function: "+comparaComThisArrow(module.exports)); // Permanece verdadeiro.
}