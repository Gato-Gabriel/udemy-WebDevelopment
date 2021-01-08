/* Comando 'forEach()' */
// Utilizado para se percorrer cada elemento de um array, sem realizar operações, apenas percorrer.
{
    const aprovados = ['Agatha','Bernardo','Castro','Deide'];
    aprovados.forEach(function(elemento,indice){  // Aqui passo uma callback, chamada para cada interação no array
        console.log(`${indice+1}. ${elemento}`);    // O índice é sempre passado como o segundo elemento*
        // Internamente no 'forEach()', há um laço 'for' sendo executado.
    })
    aprovados.forEach(nome => console.log(nome));

    const exibeAprovados = aprovado => console.log(aprovado)   // Armazenando em uma variável e passando como parâmetro apra o 'forEach'
    aprovados.forEach(exibeAprovados)
    
    /* const numeros = [0,1,2,3,4];
    numeros.forEach( l => console.log(l)) */
    //* O terceiro elemento é o próprio array. Deste parâmetro para frente(o quarto,quinto...), será tido como undefined.
}

// Criando uma função "'forEach'":
{
    const aprovados2 = ['a','b','c','d'];
    Array.prototype.forEach2 = function(callback){  // Definindo diretamente no protótipo de Array
        for(let i=0;i<this.length;i++){
            callback(this[i],i,this)
        }
    }
    
    aprovados2.forEach2(function(elemento,indice){
        console.log(`${indice+1}. ${elemento}`);
    })
}