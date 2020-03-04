/*Destructuring e um operador que permite extrair  partes de uma estrutura como array ou object. 
Ele permite remover um atributo e utilizalo como variavel.*/

//Object

pessoa = {
    nome: 'ana',
    idade: 22,
    endereco: {
        logradouro: "rua gente boa",
        numero: 11000
    }
}

//destructuring 

const { nome, idade, } = pessoa //const/let/var {informa quem vai tirar} = de onde vai tirar
const { nome: i, idade: n } = pessoa //Atribuindo "i e n" como variaveis para os atributos extraidos
const { endereco: {logradouro, numero, cep}} = pessoa //Ele cria como varaivel o que esta dentro de endereco
const { endereco } = pessoa //Aqui e endereco que sera extraido como variavel
/*se vc tentar tirar um atributo que nao existe dara undefined, 
mas se tentar tirar um filho de um que nao existe dara erro*/

const { peso } = pessoa
console.log(peso)

//Voce pode criar um valor padrao 

const {altura = '1.5m'} = pessoa
console.log(altura)

//Array

const [a] = [10]/*Criou a variavel "a" e atribuiu um valor a ela. Da mesma forma ela seria 
extraida de um array*/
console.log(a)

const [n1, , n3,  , n5, n6 = 0] = [10,7,9,8]/*Ele serao atribuidos de acordo com os arrays chamados, 
como alguns nao foram definidos e nao foram declarados nao aparecem no console. E da mesma forma 
e possivel declarar um valor padrao.*/
console.log(n1, n3, n5, n6)

const [,[,nota]] = [[8,8], [9,6,8]] /*Ele iginora todos e pega o segundo elemento do primeiro que e um array 
que e um array e pega o segundo elemento do segundo array que foi atribuido o valor 6*/
console.log(nota)

//function+object

function rand({ min = 0 , max = 1000 }){
    const valor = Math.random() * (max-min) + min //Formula para criar numeros aleatorios ente dois valores
    return Math.floor(valor)
}
/*a funcao .random gera numero entre [0,1), que quando no seu valor maximo quando mutiplicado por um numero
qualquer e arredondado ao numero mais baixo, ele sempre ficara um numero abaixo do usado para multiplicar.
Por isso se acrescenta um, e e necessario subtrair para que quando der zero o numero minimo seja 
acrescentado e quando der o maximo ele fique alguns valores abaixo do acrescentado e seja compensado 
quando o valor minimo for acrescentado.*/
/*Algumas formas para executar este codigo:

console.log(rand())
console.log(rand({ min = 50, max = 100}))
console.log(rand({min = 100 }))
console.log(rand({max = 10}))

const obj = {} ou const obj = { min: 10, max: 20}
console.log(rand(obj))

Daria erro se voce tentasse algo do tipo:
function rand = ({min = 0, max = 1000} = {}){
    (repete o codigo)
} - vc anula as suas variaveis trendo elas para um objeto undefined
console.log(rand() - nada que vc chamou existe
*/

const obj = {}
console.log(rand(obj))


function rand1 ([min = 0, max = 1000]){
    if (max < min) [min, max] = [max, min]
    const valor = Math.random( ) * (max-min) + min
    return Math.floor(valor)
}
console.log(rand1([50,1]))
/*A mesma coisa que pra objeto. A diferenca e que agora nao importa quem e maior ou menor, ao receber 
os valores a propria funcao identifica e os transfere para os seus respectivos lugares.*/



