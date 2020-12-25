/* 11) ​As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo
no console a mensagem e retornando true ou false */

function checaBissexto(ano){
    let eBissexto=false;
    if(ano%400 == 0)
        eBissexto=true;
    else if(ano%100==0)
        eBissexto=false;
    else if(ano%4==0)
        eBissexto=true;
    if(eBissexto)
        console.log('O ano é bissexto')
    else
        console.log("O ano não é bissexto")
    return eBissexto;
}

checaBissexto(4);
checaBissexto(100);
checaBissexto(400);
checaBissexto(1900);