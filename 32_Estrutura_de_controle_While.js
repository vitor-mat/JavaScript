function getInteuroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opacao = 0

/*enquand=to a condicao nao for atendida ele ficara execultando o codigo do bloco
pode ser nenhuma ou 'n' vezes*/
while(opacao != -1){
    opacao = getInteuroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opacao}`)
}
console.log('Até a próxima')

//Outro exemplo (muit0o classico)

let contador = 1

while(contador < 4){
    console.log(contador)
    contador2++
}