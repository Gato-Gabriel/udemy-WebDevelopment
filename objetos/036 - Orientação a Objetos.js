// Antes da OO e da programação procedural existirem, tinha-se a programação baseada em GO-TO, não estruturada, com desvios de fluxo no código.
// Após um artigo do programador Dijkstra comentar sobre a nocividade deste comando, "Go To Statement Considered Harmful", começou-se a criticar e mudar este paradigma.
// Dentro das linguagens estruturadas, que começaram a surgir, tem-se o paradigma procedural, baseado no procedimento, função, com foco.
procedimento(valor1,valor2,valor3);

// Agora na Orientação a Objetos, muda-se o foco; antes, era em funções que manipulavam dados - agora, é em dados, que dentro destes dados se tem funções.
objeto = {
    valor1,   // Atributos internos do objeto
    valor2,
    valor3,
    procedimento(){   // Comportamentos do objeto
        // ...
    }
}

objeto.procedimento();  // Logo, passa-se a invocar estes procedimentos a partir do dado.
// Portanto, o objeto serve como esta cápsula, que agrupa comportamentos e atributos.
// A ideia do paradigma de Orientação a Objetos, é uma maior proximidade do mundo real, que é algo comportado a objetos.

// Princípios importantes em relação à OO:
// 1. Abstração
//  Significa por exemplo, pegar um objeto do mundo real e traduzí-lo, passá-lo para dentro do sistema.
//  Ex: Pegue um carro. Quais são seus atributos, e quais deles valem a pena serem trazidos ao software? Se eu for um funcionário do DETRAN, ou um engenheiro da Hyundai?
//  É entender como mapear o mundo, suas relações e utilidades, e então trazê-las para dentro do software.
// 2. Encapsulamento
//  É se ter os detalhes de implementação escondidos, e mostrar para quem precisa utilizar o sistema, através de uma interface simples e objetiva, para se interagir com determinado objeto.
//  Ainda pegando o carro como exemplo - para o motorista utilizar o carro, eu preciso explicar como a gasolina é queimada no motor? Como funcionam suas válvulas? O porquê de aquele carro ter X horsepower? Não, estas informações ficam encapsuladas, escondidas dentro do objeto Carro, se lidando apenas com a interface de comunicação(direção, marcha, freio...);
//  O nível de abstração de um carro para outro pode variar, mas muitas das informações estão encapsuladas e não necessita-se preocupar sobre elas, conhecer detalhes internos, para se utilizar o carro.
//  Ao se mudar objetos encapsulados, fora da interface, o usuário não precisa se adaptar, não afetando sua interação com o sistema. É claro, existem objetos acoplados, que mexem tanto interna como externamente no sistema. Porém, se os objetos se comunicam de maneira excessiva entre si, qualquer mudança pode gerar um impacto grande e repercutivo.
// 3. Herança (prototype)
//  Existem algumas formas dentro do software de reusar código. Se tem reuso a partir de composição(de objetos mais simples - o carro TEM UM motor), e também de herança, que significa receber atributos e comportamentos de um objeto "pai". Algumas linguagens permitem heranças múltiplas(múltiplos "pais"), porém o JS só permite um. Este pode ter outros pais, assim criando uma cadeia de protótipos(hereditária).
//  É baseado no conceito da relação "É UM ...". Por exemplo, o ser humano É UM animal. Honda Civic É UM carro. Claro, há generalização e especialização de objetos e calssificações - um mamífero É UM animal, mas nem todo animal É UM mamífero.
//  *Priorize a composição(TEM UM) ao invés da herança, pois pode trazer confusões no código.
// 4. Polimorfismo
//  "Múltiplas formas" - A partir de uma variável mais genérica, atribui-se coisas mais concretas,tipos e subtipos, etc. Ex: Peguemos um celular, conceito genérico. Que celular é? Qual a marca? Tamanho?; A partir do conceito genérico, substitui-se por objetos concretos.
//  Uma hora um carro pode ser uma Ferrari com certos métodos, ou um Celta com outras portas, etc. 
