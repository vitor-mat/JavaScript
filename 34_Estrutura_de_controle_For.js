/*A diferenca do while e que voce declara a variavel coloca a condicao e um incremento pra condicao ser quebrada, todos no parenteses separados por ';'. */
//Se nao declarar com o let, todo mundo fora vai ter acesso a variavel.
console.log('contador 1')
for (let contador = 1; contador<11; contador++){
    console.log(contador)
}

//Como seria feito com while

console.log('contador 2')

let contador2 = 1

while(contador2 < 4){
    console.log(contador2)
    contador2++
}

//Voce tambem pode percorrer o array

const notas = [6.7, 7.4, 9.6, 8.1, 7.7] 
console.log(notas.length)

for(let i=0; i < notas.length; i++){
    console.log(`Nota ${i} = ${notas[i]}`)
}