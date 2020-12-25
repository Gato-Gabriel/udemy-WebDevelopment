/* For-In */
// Laço que percorre os atributos de uma determinada estrutura (array,objeto...)
// Existem outras formas de se fazer tal, tal como 'map()','reduce','filter', e assim por diante.
{
    // Para Arrays:
    const notas = [6.7,8.9,0.5,3.4,5.6];
    for(i in notas){
        console.log(`Índice ${i} - ${notas[i]}`);
    }

    // Para Objetos:
    const pessoa = { nome:'Gabriel', sobrenome:'Gato', idade:16, estaFormado:false }
    for(let atributo in pessoa){
        console.log(`${atributo} = ${pessoa[atributo]}`);
    }
    //console.log(atributo);   // Ao se terminar o laço, o índice ainda aparece visível. Para evitar isso, deve-se botar 'let' em sua declaração.
}