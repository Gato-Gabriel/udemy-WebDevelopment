/* Método 'concat()' */
// Método simples, contém a ideia de se concatenar vários elementos em um único array.
{
    const filhas = ['Waleska','Cibalena'];
    const filhos = ['Washington Luís','Arnaldo'];
    const proles = filhas.concat(filhos,'Ciclano');   // Nota: os argumentos passados/utilizados não são alterados.
    console.log(proles);

    console.log([].concat( 1,2,3,[4,5],[[6,7],8] ));   // Mesmo literal, ainda posso chamar a propriedade do array
}
