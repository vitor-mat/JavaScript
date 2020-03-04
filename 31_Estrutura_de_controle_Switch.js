/*Diferente do if, o condicional do switch retorna um valor. */
/*Por padrao o switch executa todos os cases. Para que isso nao aconteca, voce deve colocar a palavra reservada 'break' */
//Nao da pra colocar intervalos, apenas valores pontuais.

const imprimirresultado = function(nota){
    switch(Math.floor(nota)){
        //Forma de dois cases com a mesma sentenca de codigo como resposta
        case 10:
        case 9:
        //Ele entra aqui se for 10 ou 9
            console.logo('Quadro de honra')
        //O break serve para sair do switch e nao do memtodo 
            break
            //Outra forma de dois cases com a mesma sentenca de codigo como resposta
        case 8: case 7:
        //Voce pode tb colocar um bloco de codigo    
        {
            console.log('Aprovado')
            break}
        case 6: case 5: case 4:
            console.log('recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break
        default:
            console.log('nota invalida')
    /*Como o default vem por ultimo ele nao precisa do break. E ele esta ai para caso nenhuma das condicoes sejam atendidas. 
    Mas se voce pode coloca-lo em qualquer posicao, se ele nao estiver no final e necessario o brack*/
    }
}

//Dentro do switch voce pode colocar multiplas sentencas
/*
const imprimirresultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('Quador de honra')
            console.log('Excepcional')
            console.log('Amazing')
            console.log('Congratulation')
        case 9:
    }
}

*/