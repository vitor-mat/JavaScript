/*uma funcao e um trecho de codigo nomeado, que vc pode chama-lo para executar
uma determinada tarefa (apesar de que existem funcoes vazias, e ate sem nome).
quando chamada uma funcao, ela executara todo o seu codigo (como uma receita 
de bolo)*/
//obs: e bom ter bons nomes para as funcoes, ja que elas sao de extrema importancia.

//exemplo 1 -

/*os parametros de uma funcao sao como variaveis. o tipo depende do que ele 
recebera e/ou retorna.*/

//funcao sem retorno
function imprimirsoma(a,b){
    console.log(a+b)
}

imprimirsoma(1,1)
imprimirsoma(1) //Retorna not are number (Nan), pq o segundo valor é undfined e nao da pra somar
imprimirsoma(5, 45, 545, 22, 212, 41)  /*como so exeistem dois parametros na funcao, ele so ira 
considerar os dois primeiros valores informados*/

//E possivel informar qualquer coisa para os parametros ja que a linguagem JavaScruot e fracamente tipada
imprimirsoma("eu sei",' que nunca me deixou')
//Ou nao informar nada (resulta e Nan)
imprimirsoma()

/*Tambem e possivel executar funcaos que memso que nao venha a exibir elas podem retorna um valor.
Alem de ser possivel de determinar um valor padrao para os parametros*/
function soma(a,b = 0){
    return a+b
}
//como ela nao exibe nada na sua receita e necessario informa a funcao no console.log aqui fora
console.log(soma(2,3))

//como um dos parametros tem um valor padrao eu posso informar apenas um parametro
console.log(soma(2))
/*Os valores serao passados na ordem que os parametros sao informados, por isso se voce quiser passar 
um numero menor de valores doq de parametros e importante que os ultimos parametros tenham um valor padrao*/

//Se eu informar sem o console.log ele nao vai exibir nada ja que ele apenas retorna o valor
soma(90,10)

//Armazenando uma funcao numa variavel/constante
{
    const novasoma = function(a,b) {
        console.log(a+b)
    }
    novasoma(9,1)
}

//Armazenando uma funcao arrow numa variavel/constante
{
    let diferenca = (a,b) => {
        return a-b
    }
    console.log(diferenca(10,5))
}

/*Retorno implicito - A funcao retorna semprecisar informar o return. Acontece para a funcao arrow 
mas apenas uma sentenca (linha) de codigo sera executada*/
{
    var multiplicacao = (a,b) => a*b
    console.log(multiplicacao(9,2))

    //quando possui apenas um parametro nao e preciso colocar em parentese
    const frase = c => console.log(c)
    frase(`lesgal!!`)
}