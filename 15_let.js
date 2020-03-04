/*Diferente de var, let cria variaveis que alem de resperitarem o escopode funcao e possuir o 
escopo globa, ela respeita o escopo criado por blocos, ou seja, uma variavel criada em um bloco sera 
visivel apenas naquele bloco*/

let numero = 5
{
    let numero = 8
    console.log(`dentro = ${numero}`)

}
console.log(`fora = ${numero}`)

var letra = `kkk`
{
    let letra = `hehehe`
    console.log(`dentro2 = ${letra}`)
}
console.log(`letra2 = ${letra}`)

/*Mesmo sendo var e let, eles nao podem possuir a mesma variavel no mesmo escopo

var marca = 51
let marca = `fifty one`
console.logo(marca)*/

/*O let foi criado para solucionar o problema de escopo do var, já que se trouxesse a solucao 
diretamente no var poderia gerar um grande problema em muitos sites que foram criados apenas com var
antes do let*/

//Loop com let
/*Loop com for
Ex:
for (palavra reservada) (let i = 0 (declaracao de variaveis); i < 10 (condicao); i++ (incremento))*/

for (let i = 0; i < 10; i++){
    console.log(i)
}
//console.log(`i = ${i}`)
/*A variavel i nao pode sair do bloco quando completa 10, porque mesmo ela quebrando a 
condicao, ela esta com o escopo de bloco. Então geraria erro executar o codigo comentado acima,
já que i não existe fora da função de loop.*/

const func = []
for (let i = 0; i < 10; i++){
    func.push(function(){
        console.log(i)
    })
}

func[8]()
func[2]()
/*Foi chamados os indices do arry dessa forma ja que eles sao funcoes*/
/*Foi criado um loop que adiciona funcoes ao array, e o comando da funcao e imprimir a variavel i*/
/*Diferente do var, pelo fato do let ter escopo de bloco, ele nao sai e ocupa todos os intantes do i, 
e alem da funcao ter uma caracteristica de memoria. Cada repeticao e tratado como um bloco separado e um 
bloco ao mesmo tempo, que o let respeita, por isso que cada indice tem o seu respectivo valor.*/

