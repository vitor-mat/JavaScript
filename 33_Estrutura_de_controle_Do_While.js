const NumeroAleatorio = function (min,max){
    let valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

/*Ele executara primeiro o codigo e depois verifica a condicao  e vai ficar assim ate a condicao seja atendida.
A diferenca e que ele pode executar uma vez, mesmo que a condicao esteja atendida. */

do {
    opcao = NumeroAleatorio(-1,10)
    console.log(`A opcao escolhida foi a ${opcao}`)
} while (opcao != -1)

console.log('Final')