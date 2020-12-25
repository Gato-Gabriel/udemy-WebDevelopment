/* Operadores Lógicos */
{
    /* Tabela verdade:
    V e V -> V
    F e (QUALQUER) -> F

    V ou (QUALQUER) -> V
    F ou F -> F
    */
   // Programa:
   // Suponha que eu tenha feito dois vestibulares. Caso eu passe apenas no primeiro, comprarei um PC. Caso apenas no segundo, comprarei uma TV.
   // Caso passe nos dois, comprarei o PC, a TV e um carro. Em qualquer caso que eu passar, tomarei sorvete. Caso eu não passe em nenhum, farei nada.
   function resultado(vest1,vest2){
        const tomarSorvete = vest1 || vest2;
        const comprarPC = vest1;
        const comprarTV = vest2;
        const comprarCarro = vest1 && vest2;
        const fazerNada = !tomarSorvete;
        return { tomarSorvete,comprarPC,comprarTV,comprarCarro,fazerNada };
   }
   console.log(resultado(true,true));
   console.log(resultado(true,false));
   console.log(resultado(false,true));
   console.log(resultado(false,false));
   // OU Exclusivo:
   //const ouexclusive = !!(vest1 ^ vest2)  // Operador Bitwise - Xor
   //const ouexclusive = vest1 != vest2;
}

/* Operadores Unários */
{
    // -valor -> Operador unário(trabalha sobre um único operando)
    // !valor
    // ++valor -> Operador pre-fix
    // valor++ -> Operador post-fix
    // valor1 + valor2 -> Operador in-fix
    let num1 = 1;
    let num2 = 2;

    console.log(++num1 === num2--);  // Resultará em verdadeiro pois o "num2" é decrescido só após a comparação;
    console.log(num1,num2);
}

/* Operadores Ternários */
{
    // *Ternário = Três operandos
    const resultado = (nota) => nota >= 7 ? 'Aprovado' : 'Reprovado'
    // (nota>=7) = 1o operando
    // 'Aprovado' = 2o operando
    // 'Reprovado' = 3o operando
    console.log(resultado(7.1));
    console.log(resultado(6.5));
}