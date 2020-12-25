/* 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo
de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de
juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos. */

// *O tempo está em meses
function calculaMontante(cpt,taxa=0,tempo=1){
    let juros = (cpt*tempo*taxa/100);
    let montante = juros + cpt;
    return montante;
}
function calculaJurosCompostos(cpt,taxa=0,tempo=1){
    let montante = (cpt * (1+taxa/100)**tempo);
    return montante.toFixed(2);
}
console.log('Juros Simples: R$',calculaMontante(1000,10,2),'/--/ Juros Compostos: R$',calculaJurosCompostos(1000,10,2))