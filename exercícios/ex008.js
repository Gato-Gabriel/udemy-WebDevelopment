/* 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.) */

function calculaPontuacao(vetor){
    let recorde, contaRecorde=0, piorJogo;
    let vetorResposta = []  // Vetor que armazena os resultados pedidos
    vetor = vetor.split(" ");
    for(jogo in vetor){
        if(jogo==0){    // O primeiro jogo não conta como o recorde, logo, começo a partir do segundo elemento (índice 1)
            recorde = vetor[jogo];
            piorJogo=(parseInt(jogo))
        }     
        else{
            if(vetor[jogo]>recorde){  // Caso não seja o primeiro jogo, e tenha a maior pontuação, será o recorde.
                recorde=vetor[jogo];
                console.log(recorde)
                contaRecorde++;
            }
        }
        if(vetor[jogo]<vetor[piorJogo])
            piorJogo=(parseInt(jogo))
    }
    vetorResposta.push(contaRecorde,piorJogo+1);
    return vetorResposta;
}

console.log(calculaPontuacao('5 6 8 4 7 6 5'));
console.log(calculaPontuacao('3 4 5 5 7 6 5'));
console.log(calculaPontuacao('20 21 22 23 11'));