/* Comandos Break e Continue */
// Ambos são comandos de desvio de fluxo, sendo assim, alteram a execução normal de certo laço/condição.
// Break: Influencia em blocos 'Switch','For' e 'While/Do-While' (saída).
// Continue: Funciona dentro de 'For' e 'While/Do-While'.
// O uso destes comandos é, de certa forma, desencorajado - deve-se tentar evitar ao máximo seus usos, pois o desvio de fluxo pode causar uma certa confusão
// Use apenas quando necessário, e tente preferir por outras estruturas para ter mais controle sobre seu código e fluxo.
// *(apesar de que, em certos momentos, são válidos e práticos).
{
    // *Ambos os comandos atuam sobre o bloco mais próximo a ele.
    const nums = [1,2,3,4,5,6,7,8,9];
    for(x in nums){
        if(x==5)
            break;
        console.log(`Índice ${x} = ${nums[x]}`);
    }

    for(y in nums){
        if(y==5)
            continue;  // O 'continue' interromperá a execução atual e passará diretamente para a próxima.
        console.log(`Índice ${y} = ${nums[y]}`);
    }

    // Portanto, 'break' sai do laço corrente, e 'continue' apenas o interrompe e passa par o próximo.

    marcacao:   // Definição de um rótulo
    for(a in nums){
        for(b in nums){
            if(a==2 && b==3)  break marcacao; // Aqui, eu peço para que ele quebre um certo rótulo.
            console.log(`Par = ${a},${b}`);
        }
    }
}
/* ↑ Não use!!! Remete ao 'goto' da linguagem C, não é prático. */