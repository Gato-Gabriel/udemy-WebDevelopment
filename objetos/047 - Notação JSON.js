/* JSON - JavaScript Object Notation */
// JSON é um formato textual diferente da notação literal de objetos.
// O JSON é um formato de dados simples, muito utilizado no mercado para interoperabilidade entre sistemas de tecnologias completamente diferentes
{
    const objeto = { a:1, b:2, c:3, soma(){ return a+b+c } }
     // Convertendo para JSON:
    console.log(JSON.stringify(objeto));   // Note que a função foi excluída; JSON é um formato de dados, textual, não executado, são dados que estão trafegando de uma aplicação para outra.
    // Como ele respeita um certo padrão, outras aplicações podem pegar este texto e convertê-lo para objeto.
     // Transformando um texto JSON para objeto:
    //console.log(JSON.parse("{a:1,b:2,c:3}"))   // Assim não funciona
    //console.log(JSON.parse("{'a':1,'b':2,'c':3}"))  // Tampouco assim
    console.log(JSON.parse('{"a":1,"b":2,"c":3}'));  // Este é o padrão suportado pelo JSON.
    console.log(JSON.parse('{"a":1.76,"b":"string","c":true, "d":{}, "e":[] }'));  // Strings têm de ser em aspas duplas

    // *Sites bacanas sobre JSON:
    // json5.org - "JSON para humanos", ajuda a entender e manipular o formato de uma forma mais amigável
    // jsonlint.com - "Validador JSON", verifica se um texto é válido para a sintaxe JSON ou não, e dá dicas em relação ao formato.
}