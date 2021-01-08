/* 20)​ Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo
de cédulas para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50,
R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar
R$18, o programa deve informar apenas a seguinte informação (note que não foram exibidas informações
sobre as demais cédulas): 1 nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1 */

function contaCedula(valor=0){
    valor = valor.toFixed(0);
    console.log('------------------')
    console.log('Valor: R$'+valor);
    let notasDeCem=0,notasdeCinquenta=0,notasDeDez=0,notasDeCinco=0,notasDeUm=0;
    while(valor>0){
        if(valor-100>=0){
            valor-=100;
            notasDeCem++;
        }
        else if(valor-50>=0){
            valor-=50;
            notasdeCinquenta++;
        }
        else if(valor-10>=0){
            valor-=10;
            notasDeDez++;
        }
        else if(valor-5>=0){
            valor-=5;
            notasDeCinco++;
        }
        else{
            valor--;
            notasDeUm++;
        } 
    }

    let f1='',f2='',f3='',f4='',f5='';   // Frases que mnostram o resultado das operações
    if(notasDeCem>0)
        f1 = `${notasDeCem} notas de R$ 100. `;
    if(notasdeCinquenta>0)
        f2 = `${notasdeCinquenta} notas de R$ 50. `;
    if(notasDeDez>0)
        f3 = `${notasDeDez} notas de R$ 10. `;
    if(notasDeCinco>0)
        f4 = `${notasDeCinco} notas de R$ 5. `;
    if(notasDeUm>0)
        f5 = `${notasDeUm} notas de R$ 1. `;

    console.log(f1.concat(f2,f3,f4,f5))
}

contaCedula(20);
contaCedula(150);
contaCedula(149);
contaCedula(134.75);
contaCedula();