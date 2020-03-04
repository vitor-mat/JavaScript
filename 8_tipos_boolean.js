/*boolean determinadas 'expressoes ou caractere' 
que nos retornam os valores verdadeiro ou falso.*/

/*voce pode usar a declaracao literal*/
//exemplo

{
    let isAtivo = false
    console.log(isAtivo)
    isAtivo = true
    console.log(isAtivo)
}

/*para transformar outro valor em um boolean usa-se '!'. 
ele inverte o valor boolean padrao, o que e true vira false 
e vice-versa, para cancelar a negacao e apresentar o valor original, 
basta usar '!!' que cancela a negacao.

obs: em alguns momentos os valores se comportaram como verdadeiro 
ou falso sem precisarem de '!', neste momento ele e utilizado 
para identificarmos os valores booleans, quem e verdadeiro e 
quem e falso*/
//exemplos:

{
    {
    //qualquer numero inteiro diferente de '0' e true.
    console.log(!1)
    console.log(!!1)
    console.log(!!7)
    console.log(!!-1)

    //qualquer number que seja float, e true
    console.log(!!1.0)
    console.log(!!3.5)

    //qualquer string, inclusive apenas um espaco e verdadeiro.
    console.log(!!"eu sou verdadeiro")
    console.log(!!" ")

    //qualquer array, mesmo vazio, e verdadeiro.
    console.log(!![])

    //qualquer objeto literal, e verdadiro.
    console.log(!!{})

    //o tipo infinito, e verdadeiro.
    console.log(!!Infinity)

    
    }

    {
        //o '0', retorna o valor falso.
        console.log(!!0)

        //uma string vazia, e falso.
        console.log(!!"")

        //nulo (null), e falso. (ainda vai ser explicado)
        console.log(!!null)

        //not a number (NaN), e falso.
        console.log(!!NaN)

        //undefined, e falso.(aind vai ser explicado).
        console.log(!!undefined)
    }
    {
        /*o resultado de uma atribuicao retornara verdadeiro ou 
        falso a depender se do valor atribuido, a uma variavel 
        por exemplo.

        obs: diretamente no cosole.log a atribuicao deve ser feita 
        como parametro do '!!'.*/
        //exemplo:

        console.log(!!(isAtivo = 1))
        console.log(!!(isAtivo = 0))
    }
}