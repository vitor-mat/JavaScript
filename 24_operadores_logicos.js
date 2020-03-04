/*Nos termos tres casos com resultados diferentes, onde iremos anilisar consdicoes para um acontecimento, 
para os quais ultilizamos a tabela verdade.
e - valido, quando os dois casos forem verdadeiros;
ou (||) - valido, quando um dos casos for verdadeiro;
ou (exclusivo - valido, quando os dois casos sao diferentes, um verdadeiro e o outro nao.)*/

function compras(trabalho1, trabalho2){
    const comprarsorvete = trabalho1 || trabalho2 //Operacao curto cicuito (pode analisar apenas o primeiro parametro)
    const comprarTv50 = trabalho1 && trabalho2
    //const comprartv32 = !!(trabalho1 ^ trabalho2) -  btwise para xor, analise bit a bit
    const comprarTv32 = trabalho1 != trabalho2
    const mantersaudavel = !comprarsorvete

    return { comprarsorvete, comprarTv50, comprarTv32, mantersaudavel } //forma alternativa de gerar um object
}

console.log(compras(true,true))