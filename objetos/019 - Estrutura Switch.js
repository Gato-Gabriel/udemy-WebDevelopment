/* Estrutura de controle SWITCH-CASE */
{
    // É uma função parecida com o IF, também condicional

    const imprimeResultado = function (nota) {
        switch(Math.floor(nota)){
            case 10:   // Aqui, ele ignorará o 'case' de baixo, e seguirá as linhas de código do próximo.
            case 9:
                console.log("Quadro de honra");
                break;  // O 'Switch' tem execução "fall-through", sendo assim, ao sair de uma condição, executará todas abaixo.
                // Para que tal não ocorra, é necessário o comando 'break'.
            case 8: case 7:
                console.log("Aprovado!");   break;
            case 6: case 5: case 4:
                console.log("Recuperação");
                break;
            case 3: case 2: case 1: case 0:
                console.log("Reprovado");   break;
            default:   // Não precisa vir ao final de todas as condições, mas se for o caso, botar 'break'.
                console.log("Nota inválida!");
        }
    }
    imprimeResultado(7);
}