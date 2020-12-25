/* 39) ​Crie uma função que receba dois vetores de igual tamanho e troque seus elementos
de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e
vice versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar. */

function trocaVetor(vetor1=[],vetor2=[]){
    if(vetor1.length != vetor2.length)
        return 'Impossível de se fazer!'

    console.log('Entrada:',vetor1,vetor2);
    for(let i = 0; i < vetor1.length; i++){
        vetor1[i] += vetor2[i]
        vetor2[i] = vetor1[i] - vetor2[i]
        vetor1[i] -= vetor2[i]
    }
    console.log('Saída:',vetor1,vetor2);
}

trocaVetor([0,1,2,3,4],[5,6,7,8,9]);
trocaVetor([0,0,0],[1,1,1]);
trocaVetor([-1,-2,3],[1,-4,0]);
trocaVetor();