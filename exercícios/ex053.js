/* Crie uma função que receba um array de elementos e retorne um array somente com os números
presentes no array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará [] */

function retornaNums(array=[]){
    let vetorResultante = [];
    for(let i=0;i<array.length;i++){
        if(typeof array[i] === "number")
            vetorResultante.push(array[i]);
    }
    return vetorResultante;
}

console.log(retornaNums([1,2,3,4,5]));
console.log(retornaNums(['a',2,true,[],{},56]));
console.log(retornaNums([true,undefined,null,'']));
console.log(retornaNums([]));
console.log(retornaNums());
