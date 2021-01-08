/* Métodos importantes ao se trabalhar com Arrays em JavaScript */
{
    const jogadores = ['Neymar','Messi','Cristiano','Ronaldo','Roney'];  // *Apenas lembrando: O endereço de memória do Array é constante, mas seus atributos e tamanho, não.
    jogadores.pop();    // Retira o último elemento do Array
    jogadores.push('Ribamar');     // Adiciona um elemento na última posição do vetor
    jogadores.shift();  // Retira o primeiro elemento do Array
    jogadores.unshift('Gabigol');  // Adiciona um elemento =na primeira psoição do vetor
    console.log(jogadores);

    //  Método '.splice()'(arquivo 049 - Visão Geral.js)
    // Para adicionar elementos:
    jogadores.splice(2,0,'Gustagol','Marcelo');
    console.log(jogadores);
    // Para remover elementos:
    jogadores.splice(1,1);

    const jogadoresEspeciais = jogadores.slice(2,4);  // O método 'slice()' retorna um NOVO array entre os índices passados.
    const jogadoresFinais = jogadores.slice(3);  //  Caso seja passado apenas um, ele retornará a partir daquele ao final.
    console.log(jogadores);
    console.log(jogadoresEspeciais);
    console.log(jogadoresFinais);
    
}