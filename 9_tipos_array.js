/*array - funciona como um vetor, e uma forma de agrupar multiplos 
valores, um ficara ao lado da outra. voce pode acessar as cada 
valor atraves do seu indice, que comecam apartir do '0'.
o array no javascript possui uma estrutura eterogenia, ou seja,
ele pode possuir varios tipos para os seus valores dentro de um 
mesmo array, e ele nao possui um tamanho fixo. ele e declarado 
com colchetes '[]' e cada valor e separado por virgula*/

const valores = [7.7, 8.9, 0.1, 5.6]
{
    //quando se declara um indice nao declarado ele retorna undefined
    console.log(valores[1],valores[3],valores[9])
}

/*e possivel declarar especcificamente um um valor para um
 determinado indice no array. os que ficarem em vazios retornaram
 'nº(quantidade de vazios pulados) empty itens'.*/
//exemplo:

{
    valores[10] = 'meu'
    valores[15] = 'nome'
    console.log(valores)
}

const teste = [1,2,3,4,5]
console.log(teste)

/*.length - informa a quantidade de itens num array
obs: ele conta os arrays vazios, caso vc pule alguns (como eu fiz em valores), 
ele soma do ultimo indice declarado ao primeiro, afinal um array pode conter 
infinitos valores.*/
//exemplo

{
    console.log(teste.length)
    console.log(valores.length)
}

/*.push - serve par adicionar nos valores num array*/
//exemplo (com array eterogenio):

{
    valores.push ({id:3}, false, null, 'string')
    console.log(valores)
    /*uma boa pratica e usar os arrays de forma homegenea,
    e separa de acordo com a finalidade.
    exemplo: um para clientes, para funcionarios, 
    fornecedores, produtos e etc. (evitar misturar o array)*/
}

/*.pop() - retira o ultimo valor de um array (retorna apenas o ultimo valor)*/
//exemplo:

{
    console.log(teste.pop())
}

/*delete -  funcao usada para deletar valores de um array.
obs: 'no local vai estar informando a uantidade de intens vazios
(semelhante quando pula alguns idices para declarar um valor)'*/
//exemplo:

{
    delete teste [1]
    console.log(teste)
}

//E possivel tb criar arrey dentro de arry (matriz).

const pronomes = ["eu", "voce",["ela","ela"],"nos","vos",["eles","elas"]]