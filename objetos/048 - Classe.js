/* Classes em JS */
// Conceito surgido no ES 2015. Não passa de um detalhe de sintaxe, pois no fim, é convertida para uma função
{
    class Lancamento{
        constructor(nome,valor){
            this.nome = nome;
            this.valor = valor;
        }
    }

    class CicloFinanceiro {
        constructor(mes,ano){
            this.mes=mes;
            this.ano = ano;
            this.lancamentos = [];
        }
        adicionaLancamentos(...lancamentos){   // Pega todos os lançamentos que se queira passar, e no fim concatena todos em um array
            lancamentos.forEach(l => this.lancamentos.push(l));
        }
        sumario(){
            let valorConsolidado=0;
            this.lancamentos.forEach(l =>{   // Adiciono cada um dos lançamentos ao valor total
                valorConsolidado += l.valor
            })
            return valorConsolidado;
        }
    }

    const salario = new Lancamento('Salario',1450);
    const contaDeLuz = new Lancamento('Luz', -220);
    const contas = new CicloFinanceiro(4,2019);
    contas.adicionaLancamentos(salario,contaDeLuz);    
    console.log(contas.sumario());
}

// Herança em Classes
{
    // Tudo visto em herança de funções e objetos ocorre aqui também, pois Classes nada mais são que funções com sintaxe diferente
    class Avo{
        constructor(sobrenome){
            this.sobrenome = sobrenome;
        }
    }
    class Pai extends Avo{  // Esta é a forma, no âmbito de sintaxe de classe, de definir que uma determinada classe tem outra como protótipo.
        constructor(sobrenome,profissão='Desempregado'){
            super(sobrenome);
            this.profissão = profissão;
        }
    }
    class Filho extends Pai{
        constructor(){
            super('Silva');
        }
    }
    const filho = new Filho;
    console.log(filho);
    const pai = new Pai('Júnior','Eletricista');
    console.log(pai);
}