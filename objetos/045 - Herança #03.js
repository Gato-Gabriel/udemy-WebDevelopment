/* Herança em JavaScript #03 */
// Alterações diretamente no protótipo
{
    console.log(typeof String)
    console.log(typeof Array)
    console.log(typeof Object)  // Todas estas três são funções, sendo assim, têm a propriedade '.prototype';

    String.prototype.reverter = function(){
        return this.split('').reverse().join('');
    }
    console.log('Whatsapp'.reverter());  // Como implantei esta função no protótipo, posso utilizá-la com qualquer string.
    console.log('subi no onibus'.reverter());

    Array.prototype.primeiroItem = function(){
        return this[0];
    }
    console.log([1,2,3,4,5].primeiroItem());
    console.log(['a','b','c'].primeiroItem());

    String.prototype.toString = function(){   // Também pode-se alterar funções diretamente do prótótipo, mas não se deve fazer isto, pois pode gerar imensos efeitos colaterais.
        return 'NÃO FAÇA ISSO!!!';
    }
    console.log('Whatsapp'.reverter());   // Como o protótipo foi alterado em algo já definido, o erro repercute em diversos locais e ocasiões.
    // Portanto, nunca substitua um comportamento/método já existente no protótipo, pois o resultado é global e catastrófico.

}

// Operador 'new' e instanciação
{
    function Aula(nome,videoId){
        this.nome = nome;
        this.videoId = videoId;
    }
    const aula1 = new Aula('Bem vindo',124);   // Lembrando que, ao se fazer isto, o protótipo do objeto aponta para a função 'Aula'
    const aula2 = new Aula('Até breve!',678);
    console.log(aula1, aula2)

    // Simulando o operador 'new':
    function novo(funConstrutora, ...params) {
        const obj = {};  // Crio um objeto novo (vazio)
        obj.__proto__ = funConstrutora.prototype;   // Agora, o protótipo do objeto apontará para 'funConstrutora'
        funConstrutora.apply(obj,params);   // Executará a 'funConstrutora' passando como contexto o 'obj', e como parâmetros, 'params'.
        return obj;  // Por fim, retorno este objeto criado (assim simulando o operador 'new')
    }
    const aula3 = novo(Aula,'Bem Vindo',124);
    const aula4 = novo(Aula,'Até breve!',678);
    console.log(aula3,aula4);
}
