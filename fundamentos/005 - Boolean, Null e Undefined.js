/* Tipos no JavaScript */

/* 3 - Tipo Boolean */
{
    let isActive = false;
    console.log(isActive)
    isActive = true;
    console.log(isActive)
    isActive=1;     // Isso transformará a variável em númeroao invés de dar valor lógico verdadeiro (JS é dinâmica)
    isActive = true;
    console.log(!isActive);    // O "!" nega o valor lógico da variável, o invertendo
    console.log(!!!!isActive);
    
    // Ocasiões nas quais a variável se comportará como verdadeira
    console.log(!!3);
    console.log(!!-1);
    console.log(!!' ');
    console.log(!![]);
    console.log(!!{});
    console.log(!!Infinity);
    console.log(!!(isActive=true));   // Qualquer caso "Resolvível" - Ele vai olhar para a atribuição, não a variável
    
    // Ocasiões nas quais a variável se comportará como falsa
    console.log(!!0);
    console.log(!!'');    // Útil para checar se umaa string está preenchida ou não
    console.log(!!null);
    console.log(!!NaN);
    console.log(!!undefined);
    console.log(!!(isActive = false));

    // Operações lógicas
    console.log(!!('' || null || 0 || ' '));
    console.log('' || null || 0 || 'epa');  // Retorna o primneiro valor verdadeiro que achar
    let nome_teste = '';
    console.log(nome_teste || 'Desconhecido');
    nome_teste = 'Lucas';
    console.log(nome_teste || 'Desconhecido');
}

/* 6 - Tipos Null e Undefined */
{
    const a = {nome: "Objeto1"};   // Definindo um objeto-teste
    const b = a;    // "Atribuindo" o objeto 'a' ao 'b'.
    // "Por debaixo dos panos", a variável 'a' não tem o conteúdo do objeto, mas sim o ENDEREÇO no qual ele se localiza.
    // Logo, o que eu faço é com que 'b' aponte para o mesmo lugar de 'a' - ele passa esse endereço eletrônico
    b.nome = "Objeto2";
    console.log(a);   // Agora, 'a' terá as atribuições e mudanças feitas por 'b', visto que elas apontam o mesmo lugar
    // Isto é a chamada atribuição por referência; passa-se um endereço, e as duas variáveis referem-se ao mesmo lugar.

    let d = 3;
    let c = d;
    c++;
    console.log(d,c);   // Perceba que, agora, o valor se altera em apenas uma
    // Portanto, neste caso, a atribuição de 'c' é feita POR VALOR, pois é um tipo primitivo.
}

// Tipos:
{
    let variavel1;  // Não inicializada
    console.log(variavel1);  // Undefined é diferente de Not-Defined. Neste último, ela nem sequer existe no escopo.

    variavel1 = null;   // 'Null' significa que a variável não está apontando para nenhum endereço de memória.
    // Ausência de valor (3,true,"frase") ou endereço para o qual aponta.
    console.log(variavel1);

    // *Resumidamente: Undefined=Variável declarada, não inicializada; Null=Variável declarada, não aponta a lugar algum.
    // O Null é útil caso se queira "zerar" uma variável, tirar seus valores atribuídos.
    // Já o undefined, deixe que apenas a linguagem trabalhe com ele, deixe-o em seu canto.

    const objeto_aleatorio = {};
    console.log(objeto_aleatorio.preco);
}