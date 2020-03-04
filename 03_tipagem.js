/*Tipagem fraca - ela permite um trabalho dinamico,
mas tambem pode dificultar a identificacao do tipo
de uma variavel e gerar dor de cabeca.
nomes claros ajudam a evitar esses problema

tipagem fraca indica que uma mesma variavel pode mudar de tipo,
o que nao e permitido em algumas linguagens, mesmo assim os tipos existem.
*/

//typeof (funcao) informa o tipo da variavel

//exemplo:

let qualquer = "legal"

//o tipo aqui e string
console.log(typeof qualquer)

//mudando o tipo de qualquer

//como ela ja foi declarada nao preciso declarar novamente

qualquer = 3.14

//o tipo vai aqui e number (serve pra int e float)
console.log(typeof qualquer)

/*tipos conhecidos:
1 - string (texto)
2 - number(int ou float)
3 - function (palavras que são funcoes)
4 - obect (objetos/nao sei bem o que sao)*/
//exemplos

//function

console.log(typeof Number)

//object

console.log(typeof Math)

