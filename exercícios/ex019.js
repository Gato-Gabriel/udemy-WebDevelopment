/* 19) ​O cardápio de uma lanchonete é o seguinte:
 Código     Descrição do Produto    Preço
  100         Cachorro Quente      R$ 3,00
  200        Hambúrguer Simples    R$ 4,00
  300         Cheeseburguer        R$ 5,50
  400            Bauru             R$ 7,50
  500          Refrigerante        R$ 3,50
  600              Suco            R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade
e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente
será calculado um item. Use o comando switch. Crie um caso default para produto não existente. */

function cardapio(codigo,quantidade=1){
    let preco;
    switch(codigo){
      case 100:
        preco = (quantidade*3).toFixed(2);
        codigo = 'Cachorro(s) Quente(s)'; break;
      case 200:
        preco = (quantidade*4).toFixed(2);
        codigo = 'Hambúrger(es) Simples'; break;
      case 300:
        preco = (quantidade*5.5).toFixed(2);
        codigo = 'Cheeseburguer(s)'; break;
      case 400:
        preco = (quantidade*7.5).toFixed(2);
        codigo = 'Bauru(s)'; break;
      case 500:
        preco = (quantidade*3.5).toFixed(2);
        codigo = 'Refrigerante(s)'; break;
      case 600:
        preco = (quantidade*2.8).toFixed(2);
        codigo = 'Suco(s)'; break;
      default:
        return "Produto não existente!";
    }
    return `Você escolheu ${quantidade} ${codigo}, totalizando em R$ ${preco}.`
    // *Estou utilizando o código como o nome do produto pois o número não será utilizado, e retorna uma mensagem mais elaborada.
}

console.log(cardapio(100,2));
console.log(cardapio(200,1));
console.log(cardapio(300,0));
console.log(cardapio(400));
console.log(cardapio(500,4));
console.log(cardapio(600,5));
console.log(cardapio(700,2));
console.log(cardapio());