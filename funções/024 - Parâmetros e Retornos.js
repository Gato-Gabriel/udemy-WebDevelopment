/* Parâmetros e Retornos dentro de funções */
// Ambos são opcionais dentro das funções;
// Mesmo que uma função tenha 3 parâmetros, pode-se passar 4 argumentos ou menos, por exemplo.
{
    function area(largura,altura){
        const area = largura * altura;
        if(area>20){
            console.log(`Valor acima do permitido!`);
        }
        else return area;
    }

    console.log(area(2,2));
    console.log(area(10,10));
    console.log(area(2)); // O outro parâmetro será tomado como 'undefined'
    console.log(area());  // Ambos os argumentos serão dados como 'undefined'
    console.log(area(4,true));
    console.log(area(2,3,4,65,17, ));  // Ignora os argumentos além do número de parâmetros da função
}