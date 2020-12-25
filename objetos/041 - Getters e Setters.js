/* Getters e Setters */
// Dentre as técnicas para se ter encapsulamento em códigos, uma delas é deixar os atributos privados, e se ter métodos que alteram e lêem o valor destes atributos de uma forma controlada;
// Portanto, os métodos que mexem de forma regrada nestes atributos são chamados de Getters e Setters;
{
    const sequencia = {
        _valor: 1,  // O underline antes do nome da variável é uma convenção entre devs, de que se pretende acessá-la apenas internamente dentro deste objeto. Isto não impede que ela não seja, todavia- ela ainda consegue ser acessada externamente.
        get valor(){  return this._valor++;  },
        set valor(valor){  this._valor = valor  }  // Neste caso, e apenas neste caso, JS aceita duas funções de mesmo nome com parâmetros diferentes.
    }
    console.log(sequencia.valor, sequencia.valor);

    sequencia.valor = 1000;
    console.log(sequencia.valor, sequencia.valor);
    sequencia.valor = 900;
    console.log(sequencia.valor, sequencia.valor);

}