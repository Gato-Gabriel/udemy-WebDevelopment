/* 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá
imprimir o resultado e o resto da divisão destes dois valores. */

function operacao(divd,divs){
    console.log('Divisão entre',divd,'e',divs,':');
    console.log('Resultado:',(divd/divs).toFixed(2));
    console.log('Resto:',divd%divs);
    console.log('-----------');
}

operacao(5,4);
operacao(10,2);
operacao(7,7);
operacao(8,0);