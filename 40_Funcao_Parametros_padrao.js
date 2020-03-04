//Estrategias para gerar parametros padrao

//Estrategia 1 - 

function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log('EXEMPLO 1')
console.log(soma1())//Todos vao ser valor 1
console.log(soma1(2))//a vai valer 2 e os outros 1
//E assim sucessivamente
console.log(soma1(2, 3))
console.log(soma1(1, 2, 3))
//Obs: Se ele tiver um valor boolean false, ele usara o valor padrao.


//Estrategia 2, 3 e 4 - 

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //Pergunta se o argumento de indice 1 existe em soma2
    c = isNaN(c) ? 1 : c // Testa se a variavel 'is not a number', se ela e um numero. (Forma mais segura, para somar numeros)
    return a + b + c
}

//usando o valor padrao do ecmascript 2015

//Recomendado por ser o padrao da linguagem
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3())

//Consideracoes finais
/*
    Essas tecnicas ainda sao muito usadas. Por exemplo criar um login padrao....
    Voce pode colocar outras coisas  no verdadeiro e no falso, nao precisa ser a propria a variavel, ou um numero.
    Sempre que puder escolha os recursos mais novos da linguagem.
*/