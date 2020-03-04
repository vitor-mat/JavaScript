/*template string - e utilizado para fazer uma 
concatenacao ao codigo de uma forma a valorizar a estetica.
o template string leva em conta os espacos e as quebras de linha*/

const nome = "Rebeca"

//como normalmente seria
const concatenacao = "olá"+nome+"!"

/*${} para adicao de variaveis ou operacao no template string ``*/
//exemplo
const template = `
    Olá
        ${nome} !`

{
    console.log(concatenacao,template)
    console.log(`1 + 1 = ${1+1}`)
}

/*com o template string e possivel chamar uma funcao*/
//exemplo

//funcao arrow, ainda a ser explicada
const up = texto => texto.toUpperCase()

{
    console.log(`minusculo ${up(`maiusculo`)}`)
}

/*obs: o uso de template string normalmente sera para nome de 
variaveis, nao e muito comum chamar funcoes apesar de ser possivel*/
