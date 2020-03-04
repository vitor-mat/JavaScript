/*O operadores podem ser divididos em tipos e em quantidade de operado. 
Aqui veremos operadores aritmeticos e eles sao binarios*/

/*Nomeclatura para a posicao do operador em relacao ao operando:
infix - a + b 
prefixed - ++a 
postfxed - a++*/

const [a, b, c, d] = [1, 2, 3, 4]

//Soma
const soma = a + b + c + d

//Subtracao
const subtracao = a - b

//Multiplicacao
const multiplicacao = c * d

//Divisao
const divisao = a / c

//Modulo (resto da divisao)
const modulo = c%b //oO 2 e usado para codigos em modulo, para verificar se o numero e par ou impar.

console.log (soma, subtracao, multiplicacao, divisao.toFixed(2), modulo)