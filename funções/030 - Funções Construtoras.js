/* Funções Construtoras */
{
    // A partir delas, pode-se instanciar objetos, assim como se fosse uma Classe (Java, C#).
    // Na verdade, Classes nada mais são que uma forma diferente de se escrever uma função, de um modo mais "familiar" às outras linguagens.
    function Carro(velocMaxima = 200, delta=5){
        // Atributo privado(pertence apenas ao escopo da função)**:
        let velocAtual=0;   // Ao se instanciar algo a partir desta função, não poderei acessar este diretamente, pois é interno da função.

        // Método público:
        this.acelerar = function(vezes=1){
            for(let i=0;i<vezes;i++){
                if(velocAtual<=velocMaxima-delta)
                    velocAtual+=delta;
                else
                    velocAtual = velocMaxima;
            }
            
        }

        // Método público*:
        this.pegaVelocAtual = function(){
            return velocAtual;
        }
        // *Para deixá-lo privado, poderia utilizar 'const' ou 'let' ao invés de 'this'.
        // **Estou deixando a velocidade atual como privada para que o usuário não possa mexê-la livremente. Para que ele possa vê-la, utilizo a função acima, de retorno.
    }
    const Celta = new Carro;
    Celta.acelerar();
    console.log(Celta.pegaVelocAtual());

    const Ferrari = new Carro(350,20);
    Ferrari.acelerar(4);
    console.log(Ferrari.pegaVelocAtual());

}