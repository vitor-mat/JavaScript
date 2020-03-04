/*E a caracteristica de jogar uma variavel pra cima. Normalmente um codigo e lido de cima para baixo, 
mas o JavaScript permiti que uma variavel, apenas var, seja lida como existente mesmo antes de ser 
declarada*/

console.log(`a = ${a}`)
var a = 2
console.log('a =',a)

//O que acontece teoricamente seria:
var b
console.log(`b = ${b}`)
b = 2
console.log('b =',b)