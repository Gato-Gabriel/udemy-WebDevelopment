/* 27)​ Construa uma função que receba como parâmetros as alturas e as taxas de crescimento
anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor
ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades
de medida */

function calculaCrescimento(crianca1={altura,taxa},crianca2={altura,taxa}){
    if(crianca1.altura!=crianca2.altura){
        let criancaMenor = crianca1.altura>crianca2.altura ? crianca2 : crianca1;
        let criancaMaior = criancaMenor==crianca1? crianca2 : crianca1;
        let fraseResult = `A menor criança é a ${criancaMenor==crianca1? 1: 2}`;   // Será concatenado ao resultado final
        if(criancaMenor.taxa<=criancaMaior.taxa)
            return fraseResult+`, e ela não será maior que a outra criança.`;
        // Cálculos para caso haja ultrapassagem:
        let meses=0;
        while(criancaMenor.altura<criancaMaior.altura){
            criancaMenor.altura+=criancaMenor.taxa;
            criancaMaior.altura+=criancaMaior.taxa;
            meses++;
        }
        return fraseResult+`, e ela ficará maior que a outra criança em ${meses} mes(es).`
    }
    else{   // Caso a altura de ambas seja igual
        if(crianca1.taxa==crianca2.taxa)
            return `Ambas têm o mesmo tamanho e mesma taxa de crescimento.`;
        return `Ambas têm o mesmo tamanho, e a criança ${crianca1.taxa>crianca2.taxa ? 1 : 2} ficará mais alta em um ano.`;
    }
     
}
console.log(calculaCrescimento({altura:170,taxa:5},{altura:156,taxa:3}))   // Taxas e alturas diferentes, onde a menor criança não ultrapassa
console.log(calculaCrescimento({altura:140,taxa:3},{altura:150,taxa:2}))   // Taxas e alturas diferentes, onde a menor criança ultrapassa
console.log(calculaCrescimento({altura:140,taxa:3},{altura:140,taxa:3}))   // Taxas e alturas iguais
console.log(calculaCrescimento({altura:140,taxa:4},{altura:140,taxa:6}))   // Alturas iguais e taxas diferentes