/* Simulando um array com um objeto */
// Este programa é apenas a simulação de um array a partir de um objeto. Na prática, não tem utilidade ou facilitação, é apenas um teste.
{
    const semiArray = { 0:'Rafael', 1:'Ednaldo', 2:'Josiane'};
    console.log(semiArray);

    Object.defineProperty(semiArray,'toString',{   // Definindo esta propriedade como não-listada
        value: function(){ return Object.values(this) },
        enumerable:false
    })
    console.log(semiArray[0]);  // Acessando(por colchetes) como em um objeto, os índices de um array, já que os atributos são números.
    // ↑ Isto é normal de todo objeto, que pode ser acessado de tal maneira.

    const arrayNormal = ['Rafael','Ednaldo','Josiane'];
    console.log(semiArray.toString(),arrayNormal);
}