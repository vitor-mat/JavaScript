/*O in me da todos os indices de um array, ou seja os atributos de um array. 
Da mesma forma voce pode fazer com um objeto, e pegar os seus atributos */

//Array
const nota  = [6.7, 7.4, 9.8, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

//Objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for(let atributo in pessoa){
    console.log(`${atributo} =  ${pessoa[atributo]}`)
}

/*Nao e tao interessante usa-lo para array, pois existem formas melhores de se fazer isso. 
Ja para o object, e recomendavel. e algo interessante de se usar. */
//Da mesma forma usamos o let para que o indice/atributo esteja apenas dentro do laco.

