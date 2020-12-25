/* Laços de repetição */
/* 1 - While */
// Apropriado para uma quantidade indeterminada de repetições
{
    function pegaNumeroEntre(min,max){
        const valor = Math.random() * (max-min) + min;
        return Math.floor(valor);
    }

    let opcao = 0; // Dá um valor aleatório à variável
    while(opcao != -1){
        opcao = pegaNumeroEntre(-1,10);
        console.log(`A opção escolhida foi ${opcao}`);
    }
    console.log("Sorteio finalizado!");
    
}

/* 2 - Do-While */
// Idêntico ao 'While', porém, executa o bloco de comando antes de checar a condição.
{
    const pegaInteiroEntre = function (min,max){
        const result = Math.random() * (max-min) + min;
        return Math.floor(result);
    }
    let opc = 0;

    do{
        opc = pegaInteiroEntre(-1,10);
        console.log(`A opção escolhida foi ${opc}`);
    }while(opc!=0)  // Isto ocorre pois a estrutura de condição está depois do bloco
    console.log("Sorteio finalizado!");
}

/* 3 - For */
// Apropriado para uma quantidade determinada de vezes
{
    for(let contador=0;contador<10;contador++){
        console.log(`Contador = ${contador}`);
    }

    const notas = [6.6,7.8,9.9,8.7];
    for(let i=0;i<notas.length;i++){
        console.log(`Nota ${i+1} = ${notas[i]}`);
    }
}