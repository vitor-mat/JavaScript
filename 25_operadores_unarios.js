/*Operador unario e aquele que e acompanhado por apenas um operando.*/

//negacao logica
const a = true
console.log(!a)

//menos
const b = [5,-6]
console.log(-b[0],-b[1])

//incremento (acrescenta uma unidade a variavel)
let num1 = 1
num1++
console.log(num1)

//decremento
let num2 = 2
--num2
console.log(num2)

//num1++ (prioridade maior/e executado primerio numa operacao)e o mesmo que ++num1
console.log(++num1 === num2--)
console.log(num1 === num2)

/*Procure sempre deixar o seu codigo o mais simples possivel evitando o uso de comentarios.*/