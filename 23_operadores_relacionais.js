/*As respostas para operadores relacionais sempre serao true ou false.
Como o JavaScript e uma liguagem fracamente tipada os operadores relacionais podem ser usados para 
comparar se dois valores sao iguais independente do tipo, ou, mais precisamente, se dois valores sao 
iguais incluindo o tipo*/

//Compara se e igual
console.log('1)', '1' == 1)//Nao leva em consideracao o tipo (== e o operador)
console.log('1)', '1' === 1)//Leva em consideracao o tipo. (=== e o operador) (extritamente igual)

//Compara se e diferente
console.log('3)', '3' != 3)//Nao leva em consideracao o tipo (!= e o operador)
console.log('4)', '4' !== 4)//Leva em conta o tipo

//Menor que e maior que (ele nao opera com tipos diferentes como os anteriores, apenas com o tipo Number)
console.log('5)', 4 < 5)//Menor que
console.log('6)', 6 <= 5)//Menor que ou igual
console.log('7)', 5 > 1)//Maior que
console.log('8)', 5 >= 8)//Maior que ou igual

const d1 = new Date(0)
const d2 = new Date(0)
console.log('9)', d1 == d2)
console.log('10)', d1 === d2)
/*Os dois retornam falso porque sao criados instancias, ou seja possuem um valor de referencia diferentes. 
Enderecos de memoria sao unicos (valor por referencia).*/
console.log('11)', d1.getTime == d2.getTime)
console.log('12)', d1.getTime === d2.getTime)
/*Nesse caso ele retorna verdadeiro, porque ele considera o valor numerico da data, o que de certa forma 
a trataria agora como um valor primitivo.
getTime -  corresponde ao valor numerico (primitivo) de Date(0), "neste caso"*(não sei outras utilidades no momento"/

/*Date e um methodo para datas no Java Script.
Objetos JavaScript Date só podem ser instanciados chamando JavaScript Date como um construtor: 
chamá-lo como uma função regular (ou seja, sem o operador new) irá retornar uma string ao invés de um 
objeto Date; ao contrário de outros tipos de objetos JavaScript, objetos JavaScript Date não têm sintaxe 
literal.
Date(0) = 1 janeiro 1970 (muitas linguagemns usam, pode dar um ouco diferente por 
causa de fuso horario).*/

console.log('13)', undefined == null)
console.log('14)', undefined === null)

/*Via de regra o mais recomendado e utilizar o extritamente igual*/