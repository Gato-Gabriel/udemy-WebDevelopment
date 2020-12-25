/* Operadores no JavaScript */

/* Operadores de Atribuição */
{
    const ex = 7;  // Não há o contexto matemático de comparação(igualdade), mas sim, o de atribuição
    let a = 3;
    a+=ex;  // Acrescendo o valor de 'ex' em 'a'.
    a-=4;  // Atribuição subtrativa
    a*=2;  // Atribuição multiplicativa
    a/=3;  // Atribuição divisiva
    a%=2;  // Atribuição modular
    a**=2; // Atribuição exponencial
}

/* Operadores Aritméticos */
// Operadores podem ser classificados a partir da quantidade de operandos;
// No caso dos Aritméticos, são binários(operam em cima de dois operandos).
{
    const [a,b,c,d] = [3,5,10,15];
    const soma = a+b+c+d; // Operações binárias '(((a + b) + c) + d)'
    // -valor -> Operador unário(trabalha sobre um único operando)
    const subtracao = d - b;
    const multiplicacao = a * c;
    const divisao = c/b;
    const modulo = c%2;
    const exponenciacao = a**2;
    console.log(soma, subtracao, multiplicacao,divisao,modulo,exponenciacao); 
}

/* Operadores Relacionais */
// Também binários;
// *Sempre que se faz uma comparação(algo relacional), o resultado será 'true' ou 'false'
{
    console.log("01) " + ('1'==1));
    console.log("02) "+ ('1'===1)); // O '===' compara tanto o valor quanto o tipo
    console.log("03) "+ (3!='3'));
    console.log("04) "+ (3!=='3')); // Neste caso, são sim estritamente diferentes
    console.log("05)"+ (3<2));
    console.log("06)"+ (4>4));
    console.log("07)"+ (4>=4));
    console.log("08)"+ (4===4));

    const d1 = new Date(0);   // Date(0) = Data de referência = 1 de janeiro de 1970
    const d2 = new Date(0);
    console.log("09)"+ (d1===d2));
    console.log("10)"+ (d1==d2));  // Neste caso, ele está comaprando endereços de memória, então será falso.
    console.log("11)"+ (d1.getTime()===d2.getTime()));  // Neste caso, são iguais pois ele compara os números;
    
    console.log("12)"+ (undefined==null));
    console.log("13)"+ (undefined===null));
    // *Via de fato, é sempre melhor se utilizatr o '===', pois às vezes pode ser o mesmo valor em tipos diferentes, então é melhor precaver.
}