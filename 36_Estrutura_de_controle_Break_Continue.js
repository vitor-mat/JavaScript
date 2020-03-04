/*O break ele causa um desvio de fluxo, ele permitye que voce sai de um ponto pule algumas coisas e va para outro. 
O continue tambe faz parte dos desviadores de fluxo. Evite usa-los se possivel, pois eles causao confusao na leitura do codigo, por uma pessoa.*/

/*O continue funciona dentro do for e do while da mesma forma pro break. (sao os unicos blocos que eles influenciam, 
se ele estiver no bloco de outro elemento , ele vai sair e procurar o elemento mais proximo que ele possa influenciar), 
(alem dos elementos citados o break influencia o switch)*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('X')

for(let x in num){
    if(x == 5) {
        //ele so vai ser executado se atender o if, mas vai influenciar o for. Como e so uma sentenca nao precisaria estar num bloco
        break
    }
    console.log(`${x} = ${num[x]}`)
}

//O continue ao inves de interromper a repeticao e sair do laco, ele interrompe a repeticao e passa para o proximo laco (ele pula um laco).

console.log("")
console.log('---------------------------------------------------')
console.log('')

console.log('Y')

for(let y in num){
    if(y == 5) {
        //ele so vai ser executado se atender o if, mas vai influenciar o for. Como e so uma sentenca nao precisaria estar num bloco
        //Nesse caso quando y for igual a 5 ele comeca o laco de nove, entao ele so vai executar com y a todos os indices menos o 5
        continue
    }
    console.log(`${y} = ${num[y]}`)
}

const nums = [0, 1, 2, 3]

/*Aqui usamos o rotulo, ele serve para associar um elemento de repeciao ao qual um break/continue deve atuar. (O rotulo pode ta acima do elemento, ou ao laod como mostrado)*/
//Codigo nao recomendado a ser utilizado. Apenas afim de conhecimento.
//O ideal e trabalhar com pequenas funcoes, que uma chame a outra (melhor para manutencao e mais elegante).
externo: for(let a in nums){
    for(let b in nums){
        if(a == 2 && b == 1) break externo
        console.log(a,',',b)
    }
}

//Voce ainda pode usar o break, por exemplo, para achar um elemento dentro de um array e depois sair do laco. So cuidado para nao abusar
