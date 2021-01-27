/* Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se
o parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha
"entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro
inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não
considerando se numero é igual a minimo ou a maximo.
Exemplos:
 estaEntre(10, 100, 50) // retornará true
 estaEntre(16, 100, 160) // retornará false
 estaEntre(3, 150, 3) // retornará false
 estaEntre(3, 150, 3, true) // retornará true */

function estaEntre(numero=0, minimo=0, maximo=0, inclusivo=false){
    if(minimo>maximo){   // Troca os valores de mínimo e máximo caso estejam invertidos
        minimo = minimo + maximo;
        maximo = minimo - maximo;
        minimo = minimo - maximo;
    }
    if(inclusivo){
        if(numero>=minimo && numero<=maximo) return true
    } else {
        if(numero>minimo && numero<maximo) return true
    }
    return false;  // Caso não caiba nas condições anteriores, retornará falso.
}

console.log(estaEntre(10,5,15));
console.log(estaEntre(10,15,5));
console.log(estaEntre(10,10,50));
console.log(estaEntre(10,10,50,true));
console.log(estaEntre());

