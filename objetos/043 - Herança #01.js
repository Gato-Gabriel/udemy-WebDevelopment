/* Herança em JavaScript #01 */
// Herança é um princípio da OO que faz com que um objeto receba de um "pai" atributos e comportamentos que possam ser reutilizados.
// O objetivo da herança é não precisar fazer um "Ctrl+C Ctrl+V", criar mecanismos para que este tipo de código não precise ser copiado, mas repassado.
// Lembrando que é sempre preferível composição sobre herança por ser mais flexível, a herança só tem um ancestral, uma "classe-pai".
{
    const ferrari = {
        modelo: 'F40',
        velMax: 320
    }
    const volvo = {
        modelo: 'V40',
        velMax: 200
    }
    console.log(ferrari.__proto__);   // A partir deste atributo, consigo acessar quem é o protótipo("objeto-pai") deste objeto. Neste caso, mostrará um objeto vazio, mas o protótipo existe;
    // Caso eu tente, por exemplo, acessar um produto dentro de 'ferrari' e lá não tiver, ele buscará em seu protótipo, e caso ainda não tenha, continuará pesquisando nos protótipos dos protótipos.
    console.log(ferrari.__proto__ === Object.prototype);  // Aqui, ele representa o protótipo do objeto.
    console.log(volvo.__proto__ === Object.prototype);   // Idem ao acima. Qualquer prototype padrão de qualquer objeto criado a partir da notação literal, ou de 'new Object', apontará para 'Object.prototype'.
    console.log(ferrari.__proto__ === volvo.__proto__);  // São iguais pois apontam ao mesmo prototype.
    console.log(Object.prototype.__proto__);  // Este protótipo é o mais alto da hierarquia, então ele não tem um protótipo.
    console.log(ferrari.prototype); // *Este atributo não existe

    function meuObjeto(){};
    console.log(typeof Object,typeof meuObjeto);
    console.log(Object.prototype, meuObjeto.prototype);
}

/* Cadeia de protótipos(prototype chain) */
{
    Object.prototype.atrb0 = 'Z';  // Não recomendado pois impacta na estrutura toda
    const avo = { atrb1:'a' };
    const pai = { __proto__:avo, atrb2:'b', atrb3:'d'};
    const filho = { __proto__:pai, atrb3:'c'};
    console.log(filho.atrb1);  // Como o objeto 'filho' não tem diretamente este atributo, ele procurará em todos os protótipos da cadeia
    console.log(filho.atrb3);  // Retorna o primeiro item encontrado - "Sombreamento"(shadowing) dos itens subjacentes
    console.log(filho.atrb0);
    console.log(filho.atrbQualquer);

    const carro = {
        velAtual: 0,
        velMax: 200,
        acelerarMais(delta){
            if(this.velAtual+delta>this.velMax)
                this.velAtual = this.velMax
            else
                this.velAtual+=delta;
        },
        status(){
            return `${this.velAtual} Km/h de ${this.velMax} Km/h`;
        }
    }
    const lamborghini = {
        modelo:'L50',
        velMax: 324   // Esta propriedade irá sombrear a do protótipo;
    }
    const palio = {
        modelo:'P30',
        status(){
            return `${this.modelo}: ${super.status()}`   // 'super' referencia o protótipo(mais próximo)
        }
    }

    Object.setPrototypeOf(lamborghini, carro);   // Estabelece a relação de protótipo entre os objetos
    Object.setPrototypeOf(palio, carro);
    console.log(lamborghini);   // Só pega os atributos que pertencem de fato a 'lamborghini'
    palio.acelerarMais(15);
    console.log(palio.status());    // Executo as funções do protótipo sem problema algum
    lamborghini.acelerarMais(400);
    console.log(lamborghini.status());    // Executo as funções do protótipo sem problema algum
}